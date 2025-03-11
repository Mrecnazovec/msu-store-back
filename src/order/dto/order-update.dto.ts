import { EnumOrderStatus } from '@prisma/client'
import { IsEnum, IsOptional } from 'class-validator'

export class UpdateOrderStatusDto {
	@IsOptional()
	@IsEnum(EnumOrderStatus, {
		message: 'Статус заказа обязателен'
	})
	status: EnumOrderStatus
}
