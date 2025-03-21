import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import { ConfigService } from '@nestjs/config'

import * as cookieParser from 'cookie-parser'

async function bootstrap() {
	const app = await NestFactory.create(AppModule)

	const config = app.get(ConfigService)

	app.use(cookieParser())
	app.enableCors({
		origin: [
			config.getOrThrow<string>('CLIENT_URL'),
			'http://77.239.125.153:3000'
		],
		credentials: true,
		exposedHeaders: 'set-cookie'
	})

	const port = config.getOrThrow<number>('APPLICATION_PORT') || 5000
	await app.listen(port)
	console.log(`Server is running on port ${port}`)
}
bootstrap()
