/* eslint-disable @typescript-eslint/no-unsafe-return */
import {
	Body,
	Controller,
	Delete,
	Get,
	HttpCode,
	Param,
	Post,
	Put,
	UsePipes,
	ValidationPipe
} from '@nestjs/common'
import { DiscountService } from './discount.service'
import { Auth } from 'src/auth/decorators/auth.decorator'
import { DiscountDto } from './dto/discount.dto'

@Controller('discounts')
export class DiscountController {
	constructor(private readonly discountService: DiscountService) {}

	@Auth()
	@Get()
	async getAll() {
		return this.discountService.getAll()
	}

	@Auth()
	@Get(':id')
	async getById(@Param('id') id: string) {
		return this.discountService.getById(id)
	}

	@Post(':id')
	async useDiscount(@Param('id') id: string) {
		return this.discountService.useDiscount(id)
	}

	@Get('/user/:name')
	async getByName(@Param('name') name: string) {
		return this.discountService.getByName(name)
	}

	@UsePipes(new ValidationPipe())
	@HttpCode(200)
	@Auth()
	@Post()
	async create(@Body() dto: DiscountDto) {
		return this.discountService.create(dto)
	}

	@UsePipes(new ValidationPipe())
	@HttpCode(200)
	@Auth()
	@Put(':id')
	async update(@Param('id') id: string, @Body() dto: DiscountDto) {
		return this.discountService.update(id, dto)
	}

	@HttpCode(200)
	@Auth()
	@Delete(':id')
	async delete(@Param('id') id: string) {
		return this.discountService.delete(id)
	}
}
