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
exports.DiscountService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma.service");
let DiscountService = class DiscountService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async getAll() {
        return this.prisma.discount.findMany({
            orderBy: {
                createdAt: 'desc'
            }
        });
    }
    async getById(id) {
        const discount = await this.prisma.discount.findUnique({
            where: {
                id
            }
        });
        if (!discount)
            throw new common_1.NotFoundException('Промокод не найден');
        return discount;
    }
    async getByName(name) {
        const discount = await this.prisma.discount.findUnique({
            where: {
                name
            }
        });
        if (!discount)
            throw new common_1.NotFoundException('Промокод не найден');
        return discount;
    }
    async create(dto) {
        return this.prisma.discount.create({
            data: {
                ...dto
            }
        });
    }
    async update(id, dto) {
        await this.getById(id);
        return this.prisma.discount.update({
            where: {
                id
            },
            data: dto
        });
    }
    async useDiscount(id) {
        const data = await this.getById(id);
        const newData = {
            quantity: data.quantity - 1
        };
        return this.prisma.discount.update({
            where: {
                id
            },
            data: newData
        });
    }
    async delete(id) {
        await this.getById(id);
        return this.prisma.discount.delete({
            where: { id }
        });
    }
};
exports.DiscountService = DiscountService;
exports.DiscountService = DiscountService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], DiscountService);
//# sourceMappingURL=discount.service.js.map