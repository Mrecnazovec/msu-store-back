import { Module } from '@nestjs/common'
import { PrismaService } from 'src/prisma/prisma.service'
import { OrderController } from './order.controller'
import { OrderService } from './order.service'
import { TelegramService } from './telegram.service'

@Module({
	controllers: [OrderController],
	providers: [OrderService, PrismaService, TelegramService]
})
export class OrderModule {}
