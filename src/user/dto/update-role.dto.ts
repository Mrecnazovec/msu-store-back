import { IsNumber, IsOptional, IsString } from 'class-validator'

export class UpdateSettingDto {
	@IsOptional()
	@IsString()
	role: string

	@IsOptional()
	@IsNumber()
	discount: number
}
