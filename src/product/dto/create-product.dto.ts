import { IsString, IsArray, ArrayMinSize, IsNotEmpty } from 'class-validator'

class CreateColorDto {
	@IsString({
		message: 'Название обязательно'
	})
	name: string

	@IsString({
		message: 'Значение обязательно'
	})
	value: string

	@IsArray({
		message: 'Картинка обязательна'
	})
	@ArrayMinSize(1, { message: 'Должна быть хотя бы 1 картинка' })
	@IsNotEmpty({ each: true, message: 'Путь к картинке не может быть пустым' })
	images?: { url: string }[]
}

class CreatePriceDto {
	@IsString({
		message: 'Название обязательно'
	})
	currency: string

	@IsString({
		message: 'Значение обязательно'
	})
	price: string
}

export class CreateProductDto {
	@IsString({ message: 'Название обязательно' })
	title: string

	@IsString({ message: 'Описание обязательно' })
	description: string

	@IsString({ message: 'Размеры обязательны', each: true })
	size: string[]

	@IsArray()
	@ArrayMinSize(1, { message: 'Должна быть хотя бы одна цена' })
	prices: CreatePriceDto[]

	@IsString({ message: 'Категория обязательна' })
	categoryId?: string

	@IsArray({ message: 'Цвет обязателен' })
	colors?: CreateColorDto[]
}
