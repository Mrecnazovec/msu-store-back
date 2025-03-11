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
	HttpCode,
	UnauthorizedException,
	Query
} from '@nestjs/common'
import { ProductService } from './product.service'
import { CreateProductDto } from './dto/create-product.dto'
import { UpdateProductDto } from './dto/update-product.dto'
import { Auth } from 'src/auth/decorators/auth.decorator'
import { CurrentUser } from 'src/user/decorator/user.decorator'

@Controller('products')
export class ProductController {
	constructor(private readonly productService: ProductService) {}

	@Get()
	async getAll(@Query('searchTerm') searchTerm?: string) {
		return this.productService.getAll(searchTerm)
	}

	@Auth()
	@Get('by-storeId/:storeId')
	async getByStoreId(@Param('storeId') storeId: string) {
		return this.productService.getByStoreId(storeId)
	}

	@Get('by-id/:id')
	async getById(@Param('id') id: string) {
		return this.productService.getById(id)
	}

	@Get('by-categoryId/:categoryId')
	async getByCategory(@Param('categoryId') categoryId: string) {
		return this.productService.getByCategory(categoryId)
	}

	@Get('most-popular')
	async getMostPopular() {
		return this.productService.getMostPopular()
	}

	@Get('similar/:id')
	async getSimilar(@Param('id') id: string) {
		return this.productService.getSimilar(id)
	}

	@UsePipes(new ValidationPipe())
	@HttpCode(200)
	@Auth()
	@Post(':storeId')
	async create(
		@Param('storeId') storeId: string,
		@Body() dto: CreateProductDto,
		@CurrentUser('role') role: string
	) {
		if (role === 'moderator' || role === 'owner') {
			return this.productService.create(storeId, dto)
		} else {
			throw new UnauthorizedException('Недостаточно прав пользователя')
		}
	}

	@UsePipes(new ValidationPipe())
	@HttpCode(200)
	@Auth()
	@Put(':id')
	async update(
		@Param('id') id: string,
		@CurrentUser('role') role: string,
		@Body() dto: UpdateProductDto
	) {
		if (role === 'moderator' || role === 'owner') {
			return this.productService.update(id, dto)
		} else {
			throw new UnauthorizedException('Недостаточно прав пользователя')
		}
	}

	@HttpCode(200)
	@Auth()
	@Delete(':id')
	async delete(@Param('id') id: string, @CurrentUser('role') role: string) {
		if (role === 'moderator' || role === 'owner') {
			return this.productService.delete(id)
		} else {
			throw new UnauthorizedException('Недостаточно прав пользователя')
		}
	}
}
