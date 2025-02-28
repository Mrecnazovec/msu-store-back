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
exports.StatisticsService = void 0;
const common_1 = require("@nestjs/common");
const dayjs = require("dayjs");
const prisma_service_1 = require("../prisma.service");
dayjs.locale('ru');
const monthNames = [
    'Январь',
    'Февраль',
    'Март',
    'Апрель',
    'Май',
    'Июнь',
    'Июль',
    'Август',
    'Сентябрь',
    'Октябрь',
    'Ноябрь',
    'Декабрь'
];
let StatisticsService = class StatisticsService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async getMainStatistics(storeId, currency) {
        const totalRevenue = await this.calculateTotalRevenue(storeId, currency);
        const productsCount = await this.countProducts(storeId);
        const categoriesCount = await this.countCategories(storeId);
        const averageRating = await this.calculateAverageRating(storeId);
        return [
            { id: 1, name: 'Выручка', value: totalRevenue },
            { id: 2, name: 'Товары', value: productsCount },
            { id: 3, name: 'Категории', value: categoriesCount },
            { id: 4, name: 'Средний рейтинг', value: averageRating || 0 }
        ];
    }
    async getMiddleStatistics(storeId, currency) {
        const monthlySales = await this.calculateMonthlySales(storeId, currency);
        const lastUsers = await this.getLastUsers(storeId, currency);
        return { monthlySales, lastUsers };
    }
    async calculateTotalRevenue(storeId, currency) {
        const orders = await this.prisma.order.findMany({
            where: {
                currency: currency,
                status: { in: ['DELIVERED', 'PAYED', 'SHIPPED'] },
                items: {
                    some: {
                        store: { id: storeId }
                    }
                }
            },
            include: {
                items: { where: { storeId } }
            }
        });
        const totalRevenue = orders.reduce((acc, order) => {
            const total = order.items.reduce((itemAcc, item) => {
                return itemAcc + item.price * item.quantity;
            }, 0);
            return acc + total;
        }, 0);
        return totalRevenue;
    }
    async countProducts(storeId) {
        const productsCount = await this.prisma.product.count({
            where: { storeId }
        });
        return productsCount;
    }
    async countCategories(storeId) {
        const categoriesCount = await this.prisma.category.count({
            where: { storeId }
        });
        return categoriesCount;
    }
    async calculateAverageRating(storeId) {
        const averageRating = await this.prisma.review.aggregate({
            where: { storeId },
            _avg: { rating: true }
        });
        return averageRating._avg.rating;
    }
    async calculateMonthlySales(storeId, currency) {
        const startDate = dayjs().subtract(30, 'days').startOf('day').toDate();
        const endDate = dayjs().endOf('day').toDate();
        const salesRaw = await this.prisma.order.findMany({
            where: {
                currency: currency,
                status: { in: ['DELIVERED', 'PAYED', 'SHIPPED'] },
                createdAt: {
                    gte: startDate,
                    lte: endDate
                },
                items: {
                    some: { storeId }
                }
            },
            include: {
                items: {
                    where: { storeId },
                    select: { price: true, quantity: true }
                }
            },
            orderBy: {
                createdAt: 'asc'
            }
        });
        const formatDate = (date) => {
            return `${date.getDate()} ${monthNames[date.getMonth()]}`;
        };
        const salesByDate = new Map();
        salesRaw.forEach(order => {
            const formattedDate = formatDate(new Date(order.createdAt));
            const total = order.items.reduce((total, item) => {
                return total + item.price * item.quantity;
            }, 0);
            if (salesByDate.has(formattedDate)) {
                salesByDate.set(formattedDate, salesByDate.get(formattedDate) + total);
            }
            else {
                salesByDate.set(formattedDate, total);
            }
        });
        const monthlySales = Array.from(salesByDate, ([date, value]) => ({
            date,
            value
        }));
        return monthlySales;
    }
    async getLastUsers(storeId, currency) {
        const lastUsers = await this.prisma.user.findMany({
            where: {
                orders: {
                    some: {
                        items: {
                            some: { storeId }
                        }
                    }
                }
            },
            orderBy: { createdAt: 'desc' },
            take: 5,
            include: {
                orders: {
                    where: {
                        currency: currency,
                        status: { in: ['DELIVERED', 'PAYED', 'SHIPPED'] },
                        items: { some: { storeId } }
                    },
                    include: {
                        items: {
                            where: { storeId },
                            select: { price: true, quantity: true }
                        }
                    }
                }
            }
        });
        if (lastUsers.length === 0) {
            throw new Error('No users found');
        }
        return lastUsers.map(user => {
            if (user.orders.length === 0) {
                return '';
            }
            const lastOrder = user.orders[user.orders.length - 1];
            if (!lastOrder.items || lastOrder.items.length === 0) {
                return {
                    id: user.id,
                    name: user.name,
                    email: user.email,
                    picture: user.picture,
                    total: 0
                };
            }
            const total = lastOrder.items.reduce((total, item) => {
                return total + item.price * item.quantity;
            }, 0);
            return {
                id: user.id,
                name: user.name,
                email: user.email,
                picture: user.picture,
                total
            };
        });
    }
};
exports.StatisticsService = StatisticsService;
exports.StatisticsService = StatisticsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], StatisticsService);
//# sourceMappingURL=statistics.service.js.map