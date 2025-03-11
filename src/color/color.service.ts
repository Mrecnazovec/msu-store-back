import { Injectable, NotFoundException } from '@nestjs/common'
import { PrismaService } from 'src/prisma/prisma.service'
import { CreateColorDto } from './dto/create-color.dto'
import { UpdateColorDto } from './dto/update-color.dto'

@Injectable()
export class ColorService {
	constructor(private prisma: PrismaService) {}

	async getAll() {
		return this.prisma.color.findMany({
			include: { images: true, product: true }
		})
	}

	async getById(id: string) {
		const color = await this.prisma.color.findUnique({
			where: { id },
			include: { images: true, product: true }
		})

		if (!color) {
			throw new NotFoundException('Цвет не найден')
		}

		return color
	}

	async create(dto: CreateColorDto) {
		return this.prisma.color.create({
			data: {
				name: dto.name,
				value: dto.value,
				product: dto.productId
					? { connect: { id: dto.productId } }
					: undefined,
				images: dto.images?.length
					? { createMany: { data: dto.images } }
					: undefined
			},
			include: { images: true, product: true }
		})
	}

	async update(id: string, dto: UpdateColorDto) {
		await this.getById(id)

		return this.prisma.color.update({
			where: { id },
			data: {
				name: dto.name,
				value: dto.value,
				product: dto.productId
					? { connect: { id: dto.productId } }
					: undefined,
				images: dto.images?.length
					? { createMany: { data: dto.images } }
					: undefined
			},
			include: { images: true, product: true }
		})
	}

	async delete(id: string) {
		await this.getById(id)

		return this.prisma.color.delete({ where: { id } })
	}
}
