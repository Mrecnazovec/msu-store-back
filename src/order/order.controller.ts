import { Controller, Get, Post, Put, Body, Param } from '@nestjs/common'
import { OrderService } from './order.service'
import { Auth } from 'src/auth/decorators/auth.decorator'
import { CurrentUser } from 'src/user/decorator/user.decorator'
import { OrderCreateDto } from './dto/order-create.dto'
import { UpdateOrderStatusDto } from './dto/order-update.dto'

@Controller('orders')
export class OrderController {
	constructor(private readonly orderService: OrderService) {}

	@Auth()
	@Get('my')
	async getOrdersByUser(@CurrentUser('id') userId: string) {
		return this.orderService.getOrdersByUser(userId)
	}

	@Auth()
	@Get('by-storeId/:storeId')
	async getOrdersByStoreId(@Param('storeId') storeId: string) {
		return this.orderService.getOrdersByStoreId(storeId)
	}

	@Auth()
	@Get('by-userId/:userId')
	async getOrdersByUserId(@Param('userId') userId: string) {
		return this.orderService.getOrdersByUser(userId)
	}

	@Auth()
	@Get('by-id/:id')
	async getOrdersById(@Param('id') id: string) {
		return this.orderService.getOrdersById(id)
	}

	@Auth()
	@Get()
	async getAllOrders(@CurrentUser('role') role: string) {
		return this.orderService.getAllOrders(role)
	}

	@Auth()
	@Post()
	async createOrder(
		@CurrentUser('id') userId: string,
		@Body() dto: OrderCreateDto
	) {
		return this.orderService.createOrder(userId, dto)
	}

	@Auth()
	@Put(':id')
	async updateOrderStatus(
		@Param('id') orderId: string,
		@Body() dto: UpdateOrderStatusDto,
		@CurrentUser('role') role: string
	) {
		return this.orderService.updateOrderStatus(orderId, dto, role)
	}
}
