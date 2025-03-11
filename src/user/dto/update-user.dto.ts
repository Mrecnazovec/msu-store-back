import { IsArray, IsOptional, IsString } from 'class-validator'

export class UpdateUserDto {
	@IsOptional()
	@IsString()
	name: string

	@IsOptional()
	@IsString()
	phone: string

	@IsOptional()
	@IsString()
	social: string

	@IsOptional()
	@IsArray()
	@IsString({ each: true })
	discountArch: string[]

	@IsOptional()
	@IsString()
	email: string
}
