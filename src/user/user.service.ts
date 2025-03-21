import { Injectable, NotFoundException } from '@nestjs/common'
import { PrismaService } from 'src/prisma/prisma.service'

// import { hash } from 'argon2'
import { AuthDto } from 'src/auth/dto/auth.dto'
import { UpdateSettingDto } from './dto/update-role.dto'
import { UpdateUserDto } from './dto/update-user.dto'

@Injectable()
export class UserService {
	constructor(private readonly prisma: PrismaService) {}

	async getAll() {
		return this.prisma.user.findMany({
			select: {
				id: true,
				email: true,
				name: true,
				role: true,
				picture: true,
				social: true
			}
		})
	}

	async getById(id: string) {
		const user = await this.prisma.user.findUnique({
			where: {
				id
			},
			include: {
				stores: true,
				favorites: {
					include: {
						category: true,
						prices: true,
						colors: {
							include: {
								images: true
							}
						}
					}
				},
				orders: {
					include: {
						items: {
							include: {
								product: true
							}
						}
					}
				}
			}
		})
		return user
	}

	async getByEmail(email: string) {
		const user = await this.prisma.user.findUnique({
			where: {
				email
			},
			include: {
				stores: true,
				favorites: true,
				orders: true
			}
		})
		return user
	}

	async toggleFavorite(productId: string, userId: string) {
		const user = await this.getById(userId)

		const isExists = user?.favorites.some(
			product => product.id === productId
		)

		await this.prisma.user.update({
			where: {
				id: user?.id
			},
			data: {
				favorites: {
					[isExists ? 'disconnect' : 'connect']: {
						id: productId
					}
				}
			}
		})
		return true
	}

	async create(dto: AuthDto) {
		return this.prisma.user.create({
			data: {
				name: dto.name,
				email: dto.email,
				password: dto.password
			}
		})
	}

	async update(userId: string, dto: UpdateUserDto) {
		await this.getById(userId)

		return this.prisma.user.update({
			where: { id: userId },
			data: {
				...dto
			}
		})
	}

	async updateSetting(userId: string, dto: UpdateSettingDto) {
		const user = await this.prisma.user.findUnique({
			where: { id: userId }
		})

		if (!user) {
			throw new NotFoundException('Пользователь не найден')
		}

		return this.prisma.user.update({
			where: { id: userId },
			data: { ...dto }
		})
	}
}
