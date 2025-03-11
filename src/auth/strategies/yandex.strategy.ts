import { Injectable } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import { PassportStrategy } from '@nestjs/passport'
import { Profile, Strategy } from 'passport-yandex'

@Injectable()
export class YandexStrategy extends PassportStrategy(Strategy, 'yandex') {
	constructor(private configService: ConfigService) {
		const clientID = configService.get<string>('YANDEX_CLIENT_ID')
		const clientSecret = configService.get<string>('YANDEX_CLIENT_SECRET')
		const callbackURL =
			configService.get<string>('SERVER_URL') + '/auth/yandex/callback'

		if (!clientID || !clientSecret || !callbackURL) {
			throw new Error(
				'Yandex OAuth credentials are missing in environment variables'
			)
		}

		super({
			clientID,
			clientSecret,
			callbackURL
		})
	}

	async validate(
		_accessToken: string,
		_refreshToken: string,
		profile: Profile,
		done: (error: any, user?: any) => void
	): Promise<any> {
		try {
			const { username, emails, photos } = profile

			const user = {
				email: emails?.[0]?.value ?? null,
				name: username ?? null,
				picture: photos?.[0]?.value ?? null
			}

			done(null, user)
		} catch (error) {
			done(error, null)
		}
	}
}
