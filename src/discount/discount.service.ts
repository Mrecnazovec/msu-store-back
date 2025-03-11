/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/require-await */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { Injectable, NotFoundException } from '@nestjs/common'
import { PrismaService } from 'src/prisma/prisma.service'
import { DiscountDto } from './dto/discount.dto'

@Injectable()
export class DiscountService {
	constructor(private prisma: PrismaService) {}

	async getAll() {
		return this.prisma.discount.findMany({
			orderBy: {
				createdAt: 'desc'
			}
		})
	}

	async getById(id: string) {
		const discount = await this.prisma.discount.findUnique({
			where: {
				id
			}
		})
		if (!discount) throw new NotFoundException('Промокод не найден')

		return discount
	}

	async getByName(name: string) {
		const discount = await this.prisma.discount.findUnique({
			where: {
				name
			}
		})
		if (!discount) throw new NotFoundException('Промокод не найден')

		return discount
	}

	async create(dto: DiscountDto) {
		return this.prisma.discount.create({
			data: {
				...dto
			}
		})
	}

	async update(id: string, dto: DiscountDto) {
		await this.getById(id)

		return this.prisma.discount.update({
			where: {
				id
			},
			data: dto
		})
	}

	async useDiscount(id: string) {
		const data = await this.getById(id)

		const newData = {
			quantity: data.quantity - 1
		}

		return this.prisma.discount.update({
			where: {
				id
			},
			data: newData
		})
	}

	async delete(id: string) {
		await this.getById(id)

		return this.prisma.discount.delete({
			where: { id }
		})
	}
}
