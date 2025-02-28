import { Injectable, NotFoundException } from '@nestjs/common'
import { PrismaService } from 'src/prisma.service'
import { CreateProductDto } from './dto/create-product.dto'
import { UpdateProductDto } from './dto/update-product.dto'

@Injectable()
export class ProductService {
	constructor(private prisma: PrismaService) {}

	async getAll(searchTerm?: string) {
		if (searchTerm) {
			return this.prisma.product.findMany({
				where: {
					OR: [
						{
							title: {
								contains: searchTerm,
								mode: 'insensitive'
							}
						},
						{
							description: {
								contains: searchTerm,
								mode: 'insensitive'
							}
						}
					]
				},
				include: {
					colors: { include: { images: true } },
					prices: true,
					category: true
				}
			})
		}

		return this.prisma.product.findMany({
			orderBy: {
				createdAt: 'desc'
			},
			include: {
				colors: { include: { images: true } },
				prices: true,
				category: true
			}
		})
	}

	// private async getSearchTermFilter(searchTerm: string) {
	// 	return this.prisma.product.findMany({
	// 		where: {
	// 			OR: [
	// 				{
	// 					title: {
	// 						contains: searchTerm,
	// 						mode: 'insensitive'
	// 					},
	// 					description: {
	// 						contains: searchTerm,
	// 						mode: 'insensitive'
	// 					}
	// 				}
	// 			]
	// 		}
	// 	})
	// }

	async getById(id: string) {
		const product = await this.prisma.product.findUnique({
			where: { id },
			include: {
				colors: { include: { images: true } },
				category: true,
				prices: true,
				reviews: {
					include: {
						user: true
					}
				}
			}
		})

		if (!product) {
			throw new NotFoundException('Товар не найден')
		}

		return product
	}

	async getByStoreId(storeId: string) {
		const product = await this.prisma.product.findMany({
			where: { storeId },
			include: {
				colors: { include: { images: true } },
				prices: true,
				category: true
			}
		})

		if (!product) {
			throw new NotFoundException('Товар не найден')
		}

		return product
	}

	async getByCategory(categoryId: string) {
		const products = await this.prisma.product.findMany({
			where: {
				category: {
					id: categoryId
				}
			},
			include: {
				colors: { include: { images: true } },
				prices: true,
				category: true
			}
		})

		if (!products) {
			throw new NotFoundException('Товары не найден')
		}

		return products
	}

	async getMostPopular() {
		const mostPopularProducts = await this.prisma.orderItem.groupBy({
			by: ['productId'],
			_count: {
				id: true
			},
			orderBy: {
				_count: {
					id: 'desc'
				}
			}
		})

		const productIds = mostPopularProducts
			.map(item => item.productId)
			.filter((id): id is string => id !== null)

		const products = await this.prisma.product.findMany({
			where: {
				id: {
					in: productIds
				}
			},
			include: {
				colors: { include: { images: true } },
				prices: true,
				category: true
			}
		})
		return products
	}

	async getSimilar(id: string) {
		const currentProduct = await this.getById(id)
		if (!currentProduct)
			throw new NotFoundException('Текущий товар не найден')
		const products = await this.prisma.product.findMany({
			where: {
				category: {
					title: currentProduct.category?.title
				},
				NOT: {
					id: currentProduct.id
				}
			},

			orderBy: {
				createdAt: 'desc'
			},
			include: {
				colors: { include: { images: true } },
				prices: true,
				category: true
			}
		})
		return products
	}

	async create(storeId: string, dto: CreateProductDto) {
		return this.prisma.product.create({
			data: {
				title: dto.title,
				description: dto.description,
				size: dto.size,
				prices: {
					create: dto.prices.map(price => ({
						currency: price.currency,
						price: parseFloat(price.price)
					}))
				},
				store: { connect: { id: storeId } },
				category: dto.categoryId
					? { connect: { id: dto.categoryId } }
					: undefined,
				colors: dto.colors?.length
					? {
							create: dto.colors.map(color => ({
								name: color.name,
								value: color.value,
								images: color.images?.length
									? { createMany: { data: color.images } }
									: undefined
							}))
						}
					: undefined
			},
			include: { colors: { include: { images: true } }, prices: true }
		})
	}

	async update(id: string, dto: UpdateProductDto) {
		await this.getById(id)

		if (dto.prices?.length) {
			await this.prisma.price.deleteMany({
				where: {
					productId: id
				}
			})

			await this.prisma.price.createMany({
				data: dto.prices.map(price => ({
					currency: price.currency,
					price: parseFloat(price.price),
					productId: id
				}))
			})
		}

		if (dto.colors?.length) {
			await this.prisma.color.deleteMany({
				where: { productId: id }
			})
		}

		return this.prisma.product.update({
			where: { id },
			data: {
				title: dto.title,
				description: dto.description,
				categoryId: dto.categoryId,
				size: dto.size,
				colors: dto.colors?.length
					? {
							create: dto.colors.map(color => ({
								name: color.name,
								value: color.value,
								images: color.images?.length
									? { createMany: { data: color.images } }
									: undefined
							}))
						}
					: undefined
			},
			include: { colors: { include: { images: true } }, prices: true }
		})
	}

	async delete(id: string) {
		await this.getById(id)

		return this.prisma.product.delete({ where: { id } })
	}
}
