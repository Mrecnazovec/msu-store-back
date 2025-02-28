import { EnumOrderStatus } from '@prisma/client'
import { Type } from 'class-transformer'
import {
	IsArray,
	IsEnum,
	IsNumber,
	IsOptional,
	IsString,
	ValidateNested
} from 'class-validator'

export class OrderCreateDto {
	@IsOptional()
	@IsEnum(EnumOrderStatus, {
		message: 'Статус заказа обязателен'
	})
	status: EnumOrderStatus

	@IsString({ message: 'Валюта должна быть строкой' })
	currency: string

	@IsNumber({}, { message: 'Скидка должна быть числом' })
	discount: number

	@IsArray({
		message: 'В заказе нет ни одного товара'
	})
	@ValidateNested({ each: true })
	@Type(() => OrderItemDto)
	items: OrderItemDto[]
}

export class OrderItemDto {
	@IsNumber({}, { message: 'Количество должно быть числом' })
	quantity: number

	@IsNumber({}, { message: 'Цена должна быть числом' })
	price: number

	@IsString({ message: 'Размер продукта должен быть строкой' })
	size: string

	@IsString({ message: 'Цвет продукта должен быть строкой' })
	color: string

	@IsString({ message: 'ID продукта должен быть строкой' })
	productId: string

	@IsString({ message: 'ID коллекции должен быть строкой' })
	storeId: string
}
