import { EnumOrderStatus } from '@prisma/client'
import { IsOptional, IsString } from 'class-validator'

export class UpdateOrderStatusDto {
	@IsOptional()
	@IsString({
		message: 'Статус заказа обязателен'
	})
	status: EnumOrderStatus
}
