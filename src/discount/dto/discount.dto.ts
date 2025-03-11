import { IsNumber, IsString } from 'class-validator'

export class DiscountDto {
	@IsString({
		message: 'Название обязательно'
	})
	name: string

	@IsNumber()
	discount: number

	@IsNumber()
	quantity: number
}
