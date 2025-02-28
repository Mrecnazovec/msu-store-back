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
exports.ColorService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma.service");
let ColorService = class ColorService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async getAll() {
        return this.prisma.color.findMany({
            include: { images: true, product: true }
        });
    }
    async getById(id) {
        const color = await this.prisma.color.findUnique({
            where: { id },
            include: { images: true, product: true }
        });
        if (!color) {
            throw new common_1.NotFoundException('Цвет не найден');
        }
        return color;
    }
    async create(dto) {
        return this.prisma.color.create({
            data: {
                name: dto.name,
                value: dto.value,
                product: dto.productId
                    ? { connect: { id: dto.productId } }
                    : undefined,
                images: dto.images?.length
                    ? { createMany: { data: dto.images } }
                    : undefined
            },
            include: { images: true, product: true }
        });
    }
    async update(id, dto) {
        await this.getById(id);
        return this.prisma.color.update({
            where: { id },
            data: {
                name: dto.name,
                value: dto.value,
                product: dto.productId
                    ? { connect: { id: dto.productId } }
                    : undefined,
                images: dto.images?.length
                    ? { createMany: { data: dto.images } }
                    : undefined
            },
            include: { images: true, product: true }
        });
    }
    async delete(id) {
        await this.getById(id);
        return this.prisma.color.delete({ where: { id } });
    }
};
exports.ColorService = ColorService;
exports.ColorService = ColorService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], ColorService);
//# sourceMappingURL=color.service.js.map