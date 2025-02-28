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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DiscountController = void 0;
const common_1 = require("@nestjs/common");
const discount_service_1 = require("./discount.service");
const auth_decorator_1 = require("../auth/decorators/auth.decorator");
const discount_dto_1 = require("./dto/discount.dto");
let DiscountController = class DiscountController {
    constructor(discountService) {
        this.discountService = discountService;
    }
    async getAll() {
        return this.discountService.getAll();
    }
    async getById(id) {
        return this.discountService.getById(id);
    }
    async useDiscount(id) {
        return this.discountService.useDiscount(id);
    }
    async getByName(name) {
        return this.discountService.getByName(name);
    }
    async create(dto) {
        return this.discountService.create(dto);
    }
    async update(id, dto) {
        return this.discountService.update(id, dto);
    }
    async delete(id) {
        return this.discountService.delete(id);
    }
};
exports.DiscountController = DiscountController;
__decorate([
    (0, auth_decorator_1.Auth)(),
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], DiscountController.prototype, "getAll", null);
__decorate([
    (0, auth_decorator_1.Auth)(),
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], DiscountController.prototype, "getById", null);
__decorate([
    (0, common_1.Post)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], DiscountController.prototype, "useDiscount", null);
__decorate([
    (0, common_1.Get)('/user/:name'),
    __param(0, (0, common_1.Param)('name')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], DiscountController.prototype, "getByName", null);
__decorate([
    (0, common_1.UsePipes)(new common_1.ValidationPipe()),
    (0, common_1.HttpCode)(200),
    (0, auth_decorator_1.Auth)(),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [discount_dto_1.DiscountDto]),
    __metadata("design:returntype", Promise)
], DiscountController.prototype, "create", null);
__decorate([
    (0, common_1.UsePipes)(new common_1.ValidationPipe()),
    (0, common_1.HttpCode)(200),
    (0, auth_decorator_1.Auth)(),
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, discount_dto_1.DiscountDto]),
    __metadata("design:returntype", Promise)
], DiscountController.prototype, "update", null);
__decorate([
    (0, common_1.HttpCode)(200),
    (0, auth_decorator_1.Auth)(),
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], DiscountController.prototype, "delete", null);
exports.DiscountController = DiscountController = __decorate([
    (0, common_1.Controller)('discounts'),
    __metadata("design:paramtypes", [discount_service_1.DiscountService])
], DiscountController);
//# sourceMappingURL=discount.controller.js.map