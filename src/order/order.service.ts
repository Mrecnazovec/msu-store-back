import {
	Injectable,
	NotFoundException,
	UnauthorizedException
} from '@nestjs/common'
import { PrismaService } from 'src/prisma.service'
import { OrderCreateDto } from './dto/order-create.dto'
import { UpdateOrderStatusDto } from './dto/order-update.dto'
import { TelegramService } from './telegram.service'
import { EnumOrderStatus } from '@prisma/client'

@Injectable()
export class OrderService {
	constructor(
		private prisma: PrismaService,
		private telegramService: TelegramService
	) {}

	async createOrder(userId: string, dto: OrderCreateDto) {
		const order = await this.prisma.order.create({
			data: {
				userId,
				status: EnumOrderStatus.PENDING,
				currency: dto.currency,
				discount: dto.discount,
				total:
					dto.items.reduce(
						(acc, item) => acc + item.price * item.quantity,
						0
					) -
					(dto.items.reduce(
						(acc, item) => acc + item.price * item.quantity,
						0
					) *
						dto.discount) /
						100,
				items: {
					create: dto.items.map(item => ({
						productId: item.productId,
						quantity: item.quantity,
						price: item.price,
						size: item.size,
						color: item.color,
						storeId: item.storeId
					}))
				}
			},
			include: { items: { include: { product: true } }, user: true }
		})

		await this.telegramService.sendOrderNotification(order)

		return order
	}

	async getOrdersByUser(userId: string) {
		return this.prisma.order.findMany({
			orderBy: { createdAt: 'desc' },
			where: { userId },
			include: { user: true, items: { include: { product: true } } }
		})
	}

	async getOrdersById(id: string) {
		return this.prisma.order.findUnique({
			where: { id },
			include: { user: true, items: { include: { product: true } } }
		})
	}

	async getOrdersByStoreId(storeId: string) {
		return this.prisma.order.findMany({
			orderBy: { createdAt: 'desc' },
			where: {
				items: {
					some: {
						storeId: storeId
					}
				}
			},
			include: { user: true, items: { include: { product: true } } }
		})
	}

	async getAllOrders(role: string) {
		if (role !== 'owner' && role !== 'moderator') {
			throw new UnauthorizedException('Недостаточно прав')
		}
		return this.prisma.order.findMany({
			orderBy: { createdAt: 'desc' },
			include: { user: true, items: { include: { product: true } } }
		})
	}

	async updateOrderStatus(
		orderId: string,
		dto: UpdateOrderStatusDto,
		role: string
	) {
		if (role !== 'owner' && role !== 'moderator') {
			throw new UnauthorizedException('Недостаточно прав')
		}

		const order = await this.prisma.order.findUnique({
			where: { id: orderId },
			include: { user: true, items: true }
		})
		if (!order) {
			throw new NotFoundException('Заказ не найден')
		}
		await this.telegramService.sendUpdateStatus(order, dto)

		return this.prisma.order.update({
			where: { id: orderId },
			data: { status: dto.status }
		})
	}
}
