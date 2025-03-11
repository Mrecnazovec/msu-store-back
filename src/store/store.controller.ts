import {
	Body,
	Controller,
	Delete,
	Get,
	HttpCode,
	Param,
	Post,
	Put,
	UnauthorizedException,
	UsePipes,
	ValidationPipe
} from '@nestjs/common'
import { StoreService } from './store.service'
import { Auth } from 'src/auth/decorators/auth.decorator'
import { CurrentUser } from 'src/user/decorator/user.decorator'
import { CreateStoreDto } from './dto/create-store.dto'
import { UpdateStoreDto } from './dto/update-store.dto'

@Controller('stores')
export class StoreController {
	constructor(private readonly storeService: StoreService) {}

	@Auth()
	@Get('by-id/:id')
	async getById(
		@Param('id') storeId: string,
		@CurrentUser('id') userId: string,
		@CurrentUser('role') role: string
	) {
		if (role === 'moderator' || role === 'owner') {
			return this.storeService.getById(storeId, userId)
		} else {
			throw new UnauthorizedException('Недостаточно прав пользователя')
		}
	}

	@UsePipes(new ValidationPipe())
	@HttpCode(200)
	@Auth()
	@Post()
	async create(
		@CurrentUser('id') userId: string,
		@CurrentUser('role') role: string,
		@Body() dto: CreateStoreDto
	) {
		if (role === 'moderator' || role === 'owner') {
			return this.storeService.create(userId, dto)
		} else {
			throw new UnauthorizedException('Недостаточно прав пользователя')
		}
	}

	@UsePipes(new ValidationPipe())
	@HttpCode(200)
	@Auth()
	@Put(':id')
	async update(
		@Param('id') storeId: string,
		@CurrentUser('id') userId: string,
		@CurrentUser('role') role: string,
		@Body() dto: UpdateStoreDto
	) {
		if (role === 'moderator' || role === 'owner') {
			return this.storeService.update(storeId, userId, dto)
		} else {
			throw new UnauthorizedException('Недостаточно прав пользователя')
		}
	}

	@HttpCode(200)
	@Auth()
	@Delete(':id')
	async delete(
		@Param('id') storeId: string,
		@CurrentUser('id') userId: string,
		@CurrentUser('role') role: string
	) {
		if (role === 'moderator' || role === 'owner') {
			return this.storeService.delete(storeId, userId)
		} else {
			throw new UnauthorizedException('Недостаточно прав пользователя')
		}
	}
}
