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
exports.ReviewDto = void 0;
const class_validator_1 = require("class-validator");
class ReviewDto {
}
exports.ReviewDto = ReviewDto;
__decorate([
    (0, class_validator_1.IsString)({ message: 'Текст отзыва должен быть строкой' }),
    (0, class_validator_1.IsNotEmpty)({ message: 'Текст отзыва обязателен' }),
    __metadata("design:type", String)
], ReviewDto.prototype, "text", void 0);
__decorate([
    (0, class_validator_1.IsNumber)({}, { message: 'Рейтинг должен быть числом' }),
    (0, class_validator_1.Min)(1, { message: 'Минимальное рейтинг - 1' }),
    (0, class_validator_1.Max)(5, { message: 'Максимальный рейтинг - 5' }),
    (0, class_validator_1.IsNotEmpty)({ message: 'Рейтинг обязателен' }),
    __metadata("design:type", Number)
], ReviewDto.prototype, "rating", void 0);
//# sourceMappingURL=review.dto.js.map