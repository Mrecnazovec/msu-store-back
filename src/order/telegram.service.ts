import { Injectable } from '@nestjs/common'
import axios from 'axios'
import { TelegramSendDto } from './dto/telegram.dto'

@Injectable()
export class TelegramService {
	private botToken = process.env.TELEGRAM_BOT_TOKEN
	private chatId = process.env.TELEGRAM_CHAT_ID

	async sendOrderNotification(order: any) {
		const message = `📦 Новый заказ!\n\nСтатус: "Оформлено ⏳"\n\nТовары:\n${order.items
			.map(
				(item, index) =>
					`${index + 1}) ${item.product.title} x ${item.quantity} шт. Размер: ${item.size} Цвет: ${item.color} по ${item.price} ${order.currency === 'RUB' ? 'руб.' : order.currency === 'UZS' ? 'сум.' : '$'} `
			)
			.join(
				'\n'
			)}\n\nСумма: ${order.total} ${order.currency === 'RUB' ? 'руб.' : order.currency === 'UZS' ? 'сум.' : '$'}\nСкидка: ${order.discount}%\n\n👤 Клиент:\nИмя: ${order.user.name}\nE-mail: ${order.user.email}\nТелефон: ${order.user.phone}\nTelegram: ${order.user.social}\n\nID заказа: ${order.id}\n\nID клиента: ${order.user.id}`

		await axios.post(
			`https://api.telegram.org/bot${this.botToken}/sendMessage`,
			{
				chat_id: this.chatId,
				text: message
			}
		)
	}

	async sendUpdateStatus(order, dto) {
		const statusMessage =
			dto.status === 'PENDING'
				? 'Оформлено ⏳'
				: dto.status === 'CONFIRMED'
					? 'Обработан ✅'
					: dto.status === 'CANCELED'
						? 'Отклонён ❌'
						: dto.status === 'PAYED'
							? 'Оплачен 💸'
							: dto.status === 'SHIPPED'
								? 'Отправлен 🚚'
								: dto.status === 'DELIVERED'
									? 'Доставлен 📦'
									: 'Неизвестен ❓'

		const message = `🔄 Статус обновлён!\n\nСтатус: ${statusMessage}\nСумма: ${order.total} ${order.currency === 'RUB' ? 'руб.' : order.currency === 'UZS' ? 'сум.' : '$'}\nСкидка: ${order.discount}%\n\n👤 Клиент:\n\nИмя: ${order.user.name}\nE-mail: ${order.user.email}\nТелефон: ${order.user.phone}\nTelegram: ${order.user.social}\n\nID заказа: ${order.id}\n\nID клиента: ${order.user.id}`

		await axios.post(
			`https://api.telegram.org/bot${this.botToken}/sendMessage`,
			{
				chat_id: this.chatId,
				text: message
			}
		)
	}
}
