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
exports.OrderItemDto = exports.OrderCreateDto = void 0;
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
class OrderCreateDto {
}
exports.OrderCreateDto = OrderCreateDto;
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)({
        message: 'Статус заказа обязателен'
    }),
    __metadata("design:type", String)
], OrderCreateDto.prototype, "status", void 0);
__decorate([
    (0, class_validator_1.IsString)({ message: 'Валюта должна быть строкой' }),
    __metadata("design:type", String)
], OrderCreateDto.prototype, "currency", void 0);
__decorate([
    (0, class_validator_1.IsNumber)({}, { message: 'Скидка должна быть числом' }),
    __metadata("design:type", Number)
], OrderCreateDto.prototype, "discount", void 0);
__decorate([
    (0, class_validator_1.IsArray)({
        message: 'В заказе нет ни одного товара'
    }),
    (0, class_validator_1.ValidateNested)({ each: true }),
    (0, class_transformer_1.Type)(() => OrderItemDto),
    __metadata("design:type", Array)
], OrderCreateDto.prototype, "items", void 0);
class OrderItemDto {
}
exports.OrderItemDto = OrderItemDto;
__decorate([
    (0, class_validator_1.IsNumber)({}, { message: 'Количество должно быть числом' }),
    __metadata("design:type", Number)
], OrderItemDto.prototype, "quantity", void 0);
__decorate([
    (0, class_validator_1.IsNumber)({}, { message: 'Цена должна быть числом' }),
    __metadata("design:type", Number)
], OrderItemDto.prototype, "price", void 0);
__decorate([
    (0, class_validator_1.IsString)({ message: 'Размер продукта должен быть строкой' }),
    __metadata("design:type", String)
], OrderItemDto.prototype, "size", void 0);
__decorate([
    (0, class_validator_1.IsString)({ message: 'Цвет продукта должен быть строкой' }),
    __metadata("design:type", String)
], OrderItemDto.prototype, "color", void 0);
__decorate([
    (0, class_validator_1.IsString)({ message: 'ID продукта должен быть строкой' }),
    __metadata("design:type", String)
], OrderItemDto.prototype, "productId", void 0);
__decorate([
    (0, class_validator_1.IsString)({ message: 'ID коллекции должен быть строкой' }),
    __metadata("design:type", String)
], OrderItemDto.prototype, "storeId", void 0);
//# sourceMappingURL=order-create.dto.js.map