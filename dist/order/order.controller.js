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
exports.OrderController = void 0;
const common_1 = require("@nestjs/common");
const order_service_1 = require("./order.service");
const auth_decorator_1 = require("../auth/decorators/auth.decorator");
const user_decorator_1 = require("../user/decorator/user.decorator");
const order_create_dto_1 = require("./dto/order-create.dto");
const order_update_dto_1 = require("./dto/order-update.dto");
let OrderController = class OrderController {
    constructor(orderService) {
        this.orderService = orderService;
    }
    async getOrdersByUser(userId) {
        return this.orderService.getOrdersByUser(userId);
    }
    async getOrdersByStoreId(storeId) {
        return this.orderService.getOrdersByStoreId(storeId);
    }
    async getOrdersByUserId(userId) {
        return this.orderService.getOrdersByUser(userId);
    }
    async getOrdersById(id) {
        return this.orderService.getOrdersById(id);
    }
    async getAllOrders(role) {
        return this.orderService.getAllOrders(role);
    }
    async createOrder(userId, dto) {
        return this.orderService.createOrder(userId, dto);
    }
    async updateOrderStatus(orderId, dto, role) {
        return this.orderService.updateOrderStatus(orderId, dto, role);
    }
};
exports.OrderController = OrderController;
__decorate([
    (0, auth_decorator_1.Auth)(),
    (0, common_1.Get)('my'),
    __param(0, (0, user_decorator_1.CurrentUser)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], OrderController.prototype, "getOrdersByUser", null);
__decorate([
    (0, auth_decorator_1.Auth)(),
    (0, common_1.Get)('by-storeId/:storeId'),
    __param(0, (0, common_1.Param)('storeId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], OrderController.prototype, "getOrdersByStoreId", null);
__decorate([
    (0, auth_decorator_1.Auth)(),
    (0, common_1.Get)('by-userId/:userId'),
    __param(0, (0, common_1.Param)('userId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], OrderController.prototype, "getOrdersByUserId", null);
__decorate([
    (0, auth_decorator_1.Auth)(),
    (0, common_1.Get)('by-id/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], OrderController.prototype, "getOrdersById", null);
__decorate([
    (0, auth_decorator_1.Auth)(),
    (0, common_1.Get)(),
    __param(0, (0, user_decorator_1.CurrentUser)('role')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], OrderController.prototype, "getAllOrders", null);
__decorate([
    (0, auth_decorator_1.Auth)(),
    (0, common_1.Post)(),
    __param(0, (0, user_decorator_1.CurrentUser)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, order_create_dto_1.OrderCreateDto]),
    __metadata("design:returntype", Promise)
], OrderController.prototype, "createOrder", null);
__decorate([
    (0, auth_decorator_1.Auth)(),
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, user_decorator_1.CurrentUser)('role')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, order_update_dto_1.UpdateOrderStatusDto, String]),
    __metadata("design:returntype", Promise)
], OrderController.prototype, "updateOrderStatus", null);
exports.OrderController = OrderController = __decorate([
    (0, common_1.Controller)('orders'),
    __metadata("design:paramtypes", [order_service_1.OrderService])
], OrderController);
//# sourceMappingURL=order.controller.js.map