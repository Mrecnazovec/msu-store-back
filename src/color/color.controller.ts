import {
	Controller,
	Get,
	Post,
	Put,
	Delete,
	Body,
	Param,
	UsePipes,
	ValidationPipe,
	HttpCode
} from '@nestjs/common'
import { ColorService } from './color.service'
import { CreateColorDto } from './dto/create-color.dto'
import { UpdateColorDto } from './dto/update-color.dto'
import { Auth } from 'src/auth/decorators/auth.decorator'

@Controller('colors')
export class ColorController {
	constructor(private readonly colorService: ColorService) {}

	@Auth()
	@Get()
	async getAll() {
		return this.colorService.getAll()
	}

	@Auth()
	@Get(':id')
	async getById(@Param('id') id: string) {
		return this.colorService.getById(id)
	}

	@UsePipes(new ValidationPipe())
	@HttpCode(200)
	@Auth()
	@Post()
	async create(@Body() dto: CreateColorDto) {
		return this.colorService.create(dto)
	}

	@UsePipes(new ValidationPipe())
	@HttpCode(200)
	@Auth()
	@Put(':id')
	async update(@Param('id') id: string, @Body() dto: UpdateColorDto) {
		return this.colorService.update(id, dto)
	}

	@HttpCode(200)
	@Auth()
	@Delete(':id')
	async delete(@Param('id') id: string) {
		return this.colorService.delete(id)
	}
}
