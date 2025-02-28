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
exports.CreateProductDto = void 0;
const class_validator_1 = require("class-validator");
class CreateColorDto {
}
__decorate([
    (0, class_validator_1.IsString)({
        message: 'Название обязательно'
    }),
    __metadata("design:type", String)
], CreateColorDto.prototype, "name", void 0);
__decorate([
    (0, class_validator_1.IsString)({
        message: 'Значение обязательно'
    }),
    __metadata("design:type", String)
], CreateColorDto.prototype, "value", void 0);
__decorate([
    (0, class_validator_1.IsArray)({
        message: 'Картинка обязательна'
    }),
    (0, class_validator_1.ArrayMinSize)(1, { message: 'Должна быть хотя бы 1 картинка' }),
    (0, class_validator_1.IsNotEmpty)({ each: true, message: 'Путь к картинке не может быть пустым' }),
    __metadata("design:type", Array)
], CreateColorDto.prototype, "images", void 0);
class CreatePriceDto {
}
__decorate([
    (0, class_validator_1.IsString)({
        message: 'Название обязательно'
    }),
    __metadata("design:type", String)
], CreatePriceDto.prototype, "currency", void 0);
__decorate([
    (0, class_validator_1.IsString)({
        message: 'Значение обязательно'
    }),
    __metadata("design:type", String)
], CreatePriceDto.prototype, "price", void 0);
class CreateProductDto {
}
exports.CreateProductDto = CreateProductDto;
__decorate([
    (0, class_validator_1.IsString)({ message: 'Название обязательно' }),
    __metadata("design:type", String)
], CreateProductDto.prototype, "title", void 0);
__decorate([
    (0, class_validator_1.IsString)({ message: 'Описание обязательно' }),
    __metadata("design:type", String)
], CreateProductDto.prototype, "description", void 0);
__decorate([
    (0, class_validator_1.IsString)({ message: 'Размеры обязательны', each: true }),
    __metadata("design:type", Array)
], CreateProductDto.prototype, "size", void 0);
__decorate([
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.ArrayMinSize)(1, { message: 'Должна быть хотя бы одна цена' }),
    __metadata("design:type", Array)
], CreateProductDto.prototype, "prices", void 0);
__decorate([
    (0, class_validator_1.IsString)({ message: 'Категория обязательна' }),
    __metadata("design:type", String)
], CreateProductDto.prototype, "categoryId", void 0);
__decorate([
    (0, class_validator_1.IsArray)({ message: 'Цвет обязателен' }),
    __metadata("design:type", Array)
], CreateProductDto.prototype, "colors", void 0);
//# sourceMappingURL=create-product.dto.js.map