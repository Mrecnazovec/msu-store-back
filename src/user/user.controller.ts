import {
	Body,
	Controller,
	Get,
	HttpCode,
	Param,
	Patch,
	Post,
	Put,
	UnauthorizedException,
	UsePipes,
	ValidationPipe
} from '@nestjs/common'
import { UserService } from './user.service'
import { Auth } from 'src/auth/decorators/auth.decorator'
import { CurrentUser } from './decorator/user.decorator'
import { UpdateUserDto } from './dto/update-user.dto'
import { UpdateSettingDto } from './dto/update-role.dto'

@Controller('users')
export class UserController {
	constructor(private readonly userService: UserService) {}

	@Auth()
	@Get('profile')
	async getProfile(@CurrentUser('id') id: string) {
		return this.userService.getById(id)
	}

	@Auth()
	@Get('all')
	async getAll(@CurrentUser('role') role: string) {
		if (role === 'owner') {
			return this.userService.getAll()
		} else {
			throw new UnauthorizedException('Недостаточно прав пользователя')
		}
	}

	@Auth()
	@Patch('profile/favorites/:productId')
	async toggleFavorite(
		@CurrentUser('id') userId: string,
		@Param('productId') productId: string
	) {
		return this.userService.toggleFavorite(productId, userId)
	}

	@UsePipes(new ValidationPipe())
	@HttpCode(200)
	@Auth()
	@Post('profile')
	async update(
		@CurrentUser('id') userId: string,
		@Body() dto: UpdateUserDto
	) {
		return this.userService.update(userId, dto)
	}

	@UsePipes(new ValidationPipe())
	@HttpCode(200)
	@Auth()
	@Put('profile/:id')
	async updateRole(
		@Param('id') userId: string,
		@CurrentUser('role') role: string,
		@Body() dto: UpdateSettingDto
	) {
		if (role === 'owner') {
			return this.userService.updateSetting(userId, dto)
		} else {
			throw new UnauthorizedException('Недостаточно прав пользователя')
		}
	}

	@UsePipes(new ValidationPipe())
	@HttpCode(200)
	@Auth()
	@Get('profile/:id')
	async getProfileToUpdate(
		@Param('id') userId: string,
		@CurrentUser('role') role: string
	) {
		if (role === 'owner') {
			return this.userService.getById(userId)
		} else {
			throw new UnauthorizedException('Недостаточно прав пользователя')
		}
	}
}
