import { Injectable, UnauthorizedException } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import { PassportStrategy } from '@nestjs/passport'
import { ExtractJwt, Strategy } from 'passport-jwt'
import { UserService } from 'src/user/user.service'

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
	constructor(
		private readonly configService: ConfigService,
		private readonly userService: UserService
	) {
		const jwtSecret = configService.get<string>('JWT_SECRET')

		if (!jwtSecret) {
			throw new Error(
				'JWT_SECRET is not defined in environment variables'
			)
		}

		super({
			jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
			ignoreExpiration: false,
			secretOrKey: jwtSecret
		})
	}

	async validate({ id }: { id: string }) {
		const user = await this.userService.getById(id)

		if (!user) {
			throw new UnauthorizedException(
				'User not found or token is invalid'
			)
		}

		return user
	}
}
