"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma.service");
const telegram_service_1 = require("./telegram.service");
const client_1 = require("@prisma/client");
let OrderService = class OrderService {
    constructor(prisma, telegramService) {
        this.prisma = prisma;
        this.telegramService = telegramService;
    }
    async createOrder(userId, dto) {
        const order = await this.prisma.order.create({
            data: {
                userId,
                status: client_1.EnumOrderStatus.PENDING,
                currency: dto.currency,
                discount: dto.discount,
                total: dto.items.reduce((acc, item) => acc + item.price * item.quantity, 0) -
                    (dto.items.reduce((acc, item) => acc + item.price * item.quantity, 0) *
                        dto.discount) /
                        100,
                items: {
                    create: dto.items.map(item => ({
                        productId: item.productId,
                        quantity: item.quantity,
                        price: item.price,
                        size: item.size,
                        color: item.color,
                        storeId: item.storeId
                    }))
                }
            },
            include: { items: { include: { product: true } }, user: true }
        });
        await this.telegramService.sendOrderNotification(order);
        return order;
    }
    async getOrdersByUser(userId) {
        return this.prisma.order.findMany({
            orderBy: { createdAt: 'desc' },
            where: { userId },
            include: { user: true, items: { include: { product: true } } }
        });
    }
    async getOrdersById(id) {
        return this.prisma.order.findUnique({
            where: { id },
            include: { user: true, items: { include: { product: true } } }
        });
    }
    async getOrdersByStoreId(storeId) {
        return this.prisma.order.findMany({
            orderBy: { createdAt: 'desc' },
            where: {
                items: {
                    some: {
                        storeId: storeId
                    }
                }
            },
            include: { user: true, items: { include: { product: true } } }
        });
    }
    async getAllOrders(role) {
        if (role !== 'owner' && role !== 'moderator') {
            throw new common_1.UnauthorizedException('Недостаточно прав');
        }
        return this.prisma.order.findMany({
            orderBy: { createdAt: 'desc' },
            include: { user: true, items: { include: { product: true } } }
        });
    }
    async updateOrderStatus(orderId, dto, role) {
        if (role !== 'owner' && role !== 'moderator') {
            throw new common_1.UnauthorizedException('Недостаточно прав');
        }
        const order = await this.prisma.order.findUnique({
            where: { id: orderId },
            include: { user: true, items: true }
        });
        if (!order) {
            throw new common_1.NotFoundException('Заказ не найден');
        }
        await this.telegramService.sendUpdateStatus(order, dto);
        return this.prisma.order.update({
            where: { id: orderId },
            data: { status: dto.status }
        });
    }
};
exports.OrderService = OrderService;
exports.OrderService = OrderService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        telegram_service_1.TelegramService])
], OrderService);
//# sourceMappingURL=order.service.js.map