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
exports.StoreController = void 0;
const common_1 = require("@nestjs/common");
const store_service_1 = require("./store.service");
const auth_decorator_1 = require("../auth/decorators/auth.decorator");
const user_decorator_1 = require("../user/decorator/user.decorator");
const create_store_dto_1 = require("./dto/create-store.dto");
const update_store_dto_1 = require("./dto/update-store.dto");
let StoreController = class StoreController {
    constructor(storeService) {
        this.storeService = storeService;
    }
    async getById(storeId, userId, role) {
        if (role === 'moderator' || role === 'owner') {
            return this.storeService.getById(storeId, userId);
        }
        else {
            throw new common_1.UnauthorizedException('Недостаточно прав пользователя');
        }
    }
    async create(userId, role, dto) {
        if (role === 'moderator' || role === 'owner') {
            return this.storeService.create(userId, dto);
        }
        else {
            throw new common_1.UnauthorizedException('Недостаточно прав пользователя');
        }
    }
    async update(storeId, userId, role, dto) {
        if (role === 'moderator' || role === 'owner') {
            return this.storeService.update(storeId, userId, dto);
        }
        else {
            throw new common_1.UnauthorizedException('Недостаточно прав пользователя');
        }
    }
    async delete(storeId, userId, role) {
        if (role === 'moderator' || role === 'owner') {
            return this.storeService.delete(storeId, userId);
        }
        else {
            throw new common_1.UnauthorizedException('Недостаточно прав пользователя');
        }
    }
};
exports.StoreController = StoreController;
__decorate([
    (0, auth_decorator_1.Auth)(),
    (0, common_1.Get)('by-id/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, user_decorator_1.CurrentUser)('id')),
    __param(2, (0, user_decorator_1.CurrentUser)('role')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, String]),
    __metadata("design:returntype", Promise)
], StoreController.prototype, "getById", null);
__decorate([
    (0, common_1.UsePipes)(new common_1.ValidationPipe()),
    (0, common_1.HttpCode)(200),
    (0, auth_decorator_1.Auth)(),
    (0, common_1.Post)(),
    __param(0, (0, user_decorator_1.CurrentUser)('id')),
    __param(1, (0, user_decorator_1.CurrentUser)('role')),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, create_store_dto_1.CreateStoreDto]),
    __metadata("design:returntype", Promise)
], StoreController.prototype, "create", null);
__decorate([
    (0, common_1.UsePipes)(new common_1.ValidationPipe()),
    (0, common_1.HttpCode)(200),
    (0, auth_decorator_1.Auth)(),
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, user_decorator_1.CurrentUser)('id')),
    __param(2, (0, user_decorator_1.CurrentUser)('role')),
    __param(3, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, String, update_store_dto_1.UpdateStoreDto]),
    __metadata("design:returntype", Promise)
], StoreController.prototype, "update", null);
__decorate([
    (0, common_1.HttpCode)(200),
    (0, auth_decorator_1.Auth)(),
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, user_decorator_1.CurrentUser)('id')),
    __param(2, (0, user_decorator_1.CurrentUser)('role')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, String]),
    __metadata("design:returntype", Promise)
], StoreController.prototype, "delete", null);
exports.StoreController = StoreController = __decorate([
    (0, common_1.Controller)('stores'),
    __metadata("design:paramtypes", [store_service_1.StoreService])
], StoreController);
//# sourceMappingURL=store.controller.js.map