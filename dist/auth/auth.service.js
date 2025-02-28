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
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const prisma_service_1 = require("../prisma.service");
const user_service_1 = require("../user/user.service");
const config_1 = require("@nestjs/config");
let AuthService = class AuthService {
    constructor(jwt, userService, prisma, configService) {
        this.jwt = jwt;
        this.userService = userService;
        this.prisma = prisma;
        this.configService = configService;
        this.EXPIRE_DAY_REFRESH_TOKEN = 1;
        this.REFRESH_TOKEN_NAME = 'refreshToken';
    }
    async login(dto) {
        const user = await this.validateUser(dto);
        const tokens = this.issueTokens(user.id);
        return { user, ...tokens };
    }
    async register(dto) {
        const normalizedEmail = dto.email.toLowerCase();
        const oldUser = await this.userService.getByEmail(normalizedEmail);
        if (oldUser)
            throw new common_1.BadRequestException('Пользователь уже существует');
        const user = await this.userService.create({
            ...dto,
            email: normalizedEmail
        });
        const tokens = this.issueTokens(user.id);
        return { user, ...tokens };
    }
    async getNewTokens(refreshToken) {
        const result = await this.jwt.verifyAsync(refreshToken);
        if (!result) {
            throw new common_1.UnauthorizedException('Невалидный refresh токен');
        }
        const user = await this.userService.getById(result.id);
        if (!user) {
            throw new common_1.NotFoundException('Пользователь не найден');
        }
        const tokens = this.issueTokens(user.id);
        return { user, ...tokens };
    }
    issueTokens(userId) {
        const data = { id: userId };
        const accessToken = this.jwt.sign(data, {
            expiresIn: '3d'
        });
        const refreshToken = this.jwt.sign(data, {
            expiresIn: '7d'
        });
        return { accessToken, refreshToken };
    }
    async validateUser(dto) {
        const normalizedEmail = dto.email.toLowerCase();
        const user = await this.userService.getByEmail(normalizedEmail);
        if (!user)
            throw new common_1.NotFoundException('Пользователь не найден');
        return user;
    }
    async validateOAuthLogin(req) {
        let user = await this.userService.getByEmail(req.user.email);
        if (!user) {
            user = await this.prisma.user.create({
                data: {
                    email: req.user.email,
                    name: req.user.name,
                    picture: req.user.picture
                },
                include: {
                    stores: true,
                    favorites: true,
                    orders: true
                }
            });
        }
        const tokens = this.issueTokens(user.id);
        return { user, ...tokens };
    }
    addRefreshTokenToResponse(res, refreshToken) {
        const expiresIn = new Date();
        expiresIn.setDate(expiresIn.getDate() + this.EXPIRE_DAY_REFRESH_TOKEN);
        res.cookie(this.REFRESH_TOKEN_NAME, refreshToken, {
            httpOnly: true,
            domain: this.configService.get('SERVER_DOMAIN'),
            expires: expiresIn,
            secure: true,
            sameSite: 'none'
        });
    }
    removeRefreshTokenFromResponse(res) {
        res.cookie(this.REFRESH_TOKEN_NAME, '', {
            httpOnly: true,
            domain: this.configService.get('SERVER_DOMAIN'),
            expires: new Date(0),
            secure: true,
            sameSite: 'none'
        });
    }
};
exports.AuthService = AuthService;
exports.AuthService = AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [jwt_1.JwtService,
        user_service_1.UserService,
        prisma_service_1.PrismaService,
        config_1.ConfigService])
], AuthService);
//# sourceMappingURL=auth.service.js.map