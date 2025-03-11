import { IsString, IsOptional, IsArray } from 'class-validator'

export class CreateColorDto {
	@IsString()
	name: string

	@IsString()
	value: string

	@IsOptional()
	@IsString()
	productId?: string

	@IsOptional()
	@IsArray()
	images?: { url: string }[]
}
