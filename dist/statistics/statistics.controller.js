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
exports.StatisticsController = void 0;
const common_1 = require("@nestjs/common");
const statistics_service_1 = require("./statistics.service");
const auth_decorator_1 = require("../auth/decorators/auth.decorator");
let StatisticsController = class StatisticsController {
    constructor(statisticsService) {
        this.statisticsService = statisticsService;
    }
    async getMainStatistics(storeId, currency) {
        return this.statisticsService.getMainStatistics(storeId, currency);
    }
    async getMiddleStatistics(storeId, currency) {
        return this.statisticsService.getMiddleStatistics(storeId, currency);
    }
};
exports.StatisticsController = StatisticsController;
__decorate([
    (0, auth_decorator_1.Auth)(),
    (0, common_1.Get)('main/:storeId/:currency'),
    __param(0, (0, common_1.Param)('storeId')),
    __param(1, (0, common_1.Param)('currency')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], StatisticsController.prototype, "getMainStatistics", null);
__decorate([
    (0, auth_decorator_1.Auth)(),
    (0, common_1.Get)('middle/:storeId/:currency'),
    __param(0, (0, common_1.Param)('storeId')),
    __param(1, (0, common_1.Param)('currency')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], StatisticsController.prototype, "getMiddleStatistics", null);
exports.StatisticsController = StatisticsController = __decorate([
    (0, common_1.Controller)('statistics'),
    __metadata("design:paramtypes", [statistics_service_1.StatisticsService])
], StatisticsController);
//# sourceMappingURL=statistics.controller.js.map