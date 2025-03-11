import { IsOptional, IsString } from 'class-validator'
import { EnumOrderStatus } from 'prisma/__generated__'

export class UpdateOrderStatusDto {
	@IsOptional()
	@IsString({ message: 'Статус заказа обязателен' })
	status: EnumOrderStatus
}
