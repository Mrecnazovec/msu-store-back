import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import { ConfigService } from '@nestjs/config'

import * as cookieParser from 'cookie-parser'

async function bootstrap() {
	const app = await NestFactory.create(AppModule)

	const config = app.get(ConfigService)

	app.use(cookieParser())
	app.enableCors({
		origin: config.getOrThrow<string>('CLIENT_URL'),
		credentials: true
		// exposedHeaders: ['set-cookie']
	})

	await app.listen(5000)
}
bootstrap()
