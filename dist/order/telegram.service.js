"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TelegramService = void 0;
const common_1 = require("@nestjs/common");
const axios_1 = require("axios");
let TelegramService = class TelegramService {
    constructor() {
        this.botToken = process.env.TELEGRAM_BOT_TOKEN;
        this.chatId = process.env.TELEGRAM_CHAT_ID;
    }
    async sendOrderNotification(order) {
        const message = `📦 Новый заказ!\n\nСтатус: "Оформлено ⏳"\n\nТовары:\n${order.items
            .map((item, index) => `${index + 1}) ${item.product.title} x ${item.quantity} шт. Размер: ${item.size} Цвет: ${item.color} по ${item.price} ${order.currency === 'RUB' ? 'руб.' : order.currency === 'UZS' ? 'сум.' : '$'} `)
            .join('\n')}\n\nСумма: ${order.total} ${order.currency === 'RUB' ? 'руб.' : order.currency === 'UZS' ? 'сум.' : '$'}\nСкидка: ${order.discount}%\n\n👤 Клиент:\nИмя: ${order.user.name}\nE-mail: ${order.user.email}\nТелефон: ${order.user.phone}\nTelegram: ${order.user.social}\n\nID заказа: ${order.id}\n\nID клиента: ${order.user.id}`;
        await axios_1.default.post(`https://api.telegram.org/bot${this.botToken}/sendMessage`, {
            chat_id: this.chatId,
            text: message
        });
    }
    async sendUpdateStatus(order, dto) {
        const statusMessage = dto.status === 'PENDING'
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
                                : 'Неизвестен ❓';
        const message = `🔄 Статус обновлён!\n\nСтатус: ${statusMessage}\nСумма: ${order.total} ${order.currency === 'RUB' ? 'руб.' : order.currency === 'UZS' ? 'сум.' : '$'}\nСкидка: ${order.discount}%\n\n👤 Клиент:\n\nИмя: ${order.user.name}\nE-mail: ${order.user.email}\nТелефон: ${order.user.phone}\nTelegram: ${order.user.social}\n\nID заказа: ${order.id}\n\nID клиента: ${order.user.id}`;
        await axios_1.default.post(`https://api.telegram.org/bot${this.botToken}/sendMessage`, {
            chat_id: this.chatId,
            text: message
        });
    }
};
exports.TelegramService = TelegramService;
exports.TelegramService = TelegramService = __decorate([
    (0, common_1.Injectable)()
], TelegramService);
//# sourceMappingURL=telegram.service.js.map