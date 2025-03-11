import {
	IsString,
	IsNumber,
	IsArray,
	ValidateNested,
	IsOptional
} from 'class-validator'
import { Type } from 'class-transformer'
import { CreateProductDto } from 'src/product/dto/create-product.dto'

class OrderItemDto {
	@IsString()
	id: string

	@IsNumber()
	quantity: number

	@IsNumber()
	price: number

	@IsString()
	size: string

	@IsArray()
	@ValidateNested()
	@Type(() => CreateProductDto)
	product?: CreateProductDto | null
}

class OrderUserDto {
	@IsString()
	id: string

	@IsString()
	email: string

	@IsOptional()
	@IsString()
	password: string | null

	@IsString()
	name: string

	@IsString()
	role: string

	@IsString()
	picture: string

	@IsOptional()
	@IsString()
	phone: string

	@IsOptional()
	@IsString()
	social: string
}

export class TelegramSendDto {
	@IsString()
	id: string

	@IsString()
	status: string

	@IsNumber()
	total: number

	@IsString()
	currency: string

	@IsNumber()
	discount: number

	@IsArray()
	@ValidateNested({ each: true })
	@Type(() => OrderItemDto)
	items: OrderItemDto[]

	@ValidateNested()
	@Type(() => OrderUserDto)
	user: OrderUserDto
}
