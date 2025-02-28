import { JwtService } from '@nestjs/jwt';
import { PrismaService } from 'src/prisma.service';
import { UserService } from 'src/user/user.service';
import { AuthDto } from './dto/auth.dto';
import { Response } from 'express';
import { ConfigService } from '@nestjs/config';
export declare class AuthService {
    private jwt;
    private userService;
    private prisma;
    private configService;
    EXPIRE_DAY_REFRESH_TOKEN: number;
    REFRESH_TOKEN_NAME: string;
    constructor(jwt: JwtService, userService: UserService, prisma: PrismaService, configService: ConfigService);
    login(dto: AuthDto): Promise<{
        accessToken: string;
        refreshToken: string;
        user: {
            stores: {
                id: string;
                createdAt: Date;
                updatedAt: Date;
                title: string;
                description: string | null;
                userId: string | null;
            }[];
            favorites: {
                id: string;
                createdAt: Date;
                updatedAt: Date;
                title: string;
                description: string;
                size: string[];
                storeId: string | null;
                categoryId: string | null;
                userId: string | null;
            }[];
            orders: {
                discount: number;
                id: string;
                createdAt: Date;
                updatedAt: Date;
                userId: string | null;
                currency: string;
                status: import(".prisma/client").$Enums.EnumOrderStatus;
                total: number;
            }[];
        } & {
            name: string;
            email: string;
            password: string | null;
            role: string;
            phone: string;
            social: string;
            discountArch: string[];
            id: string;
            createdAt: Date;
            updatedAt: Date;
            picture: string;
        };
    }>;
    register(dto: AuthDto): Promise<{
        accessToken: string;
        refreshToken: string;
        user: {
            name: string;
            email: string;
            password: string | null;
            role: string;
            phone: string;
            social: string;
            discountArch: string[];
            id: string;
            createdAt: Date;
            updatedAt: Date;
            picture: string;
        };
    }>;
    getNewTokens(refreshToken: string): Promise<{
        accessToken: string;
        refreshToken: string;
        user: {
            stores: {
                id: string;
                createdAt: Date;
                updatedAt: Date;
                title: string;
                description: string | null;
                userId: string | null;
            }[];
            favorites: ({
                category: {
                    id: string;
                    createdAt: Date;
                    updatedAt: Date;
                    title: string;
                    description: string;
                    storeId: string | null;
                } | null;
                prices: {
                    price: number;
                    id: string;
                    createdAt: Date;
                    updatedAt: Date;
                    currency: string;
                    productId: string | null;
                }[];
                colors: ({
                    images: {
                        id: string;
                        createdAt: Date;
                        updatedAt: Date;
                        url: string;
                        colorId: string | null;
                    }[];
                } & {
                    name: string;
                    id: string;
                    createdAt: Date;
                    updatedAt: Date;
                    productId: string | null;
                    value: string;
                })[];
            } & {
                id: string;
                createdAt: Date;
                updatedAt: Date;
                title: string;
                description: string;
                size: string[];
                storeId: string | null;
                categoryId: string | null;
                userId: string | null;
            })[];
            orders: ({
                items: ({
                    product: {
                        id: string;
                        createdAt: Date;
                        updatedAt: Date;
                        title: string;
                        description: string;
                        size: string[];
                        storeId: string | null;
                        categoryId: string | null;
                        userId: string | null;
                    } | null;
                } & {
                    color: string | null;
                    price: number;
                    id: string;
                    createdAt: Date;
                    updatedAt: Date;
                    size: string;
                    storeId: string | null;
                    productId: string | null;
                    quantity: number;
                    orderId: string | null;
                })[];
            } & {
                discount: number;
                id: string;
                createdAt: Date;
                updatedAt: Date;
                userId: string | null;
                currency: string;
                status: import(".prisma/client").$Enums.EnumOrderStatus;
                total: number;
            })[];
        } & {
            name: string;
            email: string;
            password: string | null;
            role: string;
            phone: string;
            social: string;
            discountArch: string[];
            id: string;
            createdAt: Date;
            updatedAt: Date;
            picture: string;
        };
    }>;
    issueTokens(userId: string): {
        accessToken: string;
        refreshToken: string;
    };
    private validateUser;
    validateOAuthLogin(req: any): Promise<{
        accessToken: string;
        refreshToken: string;
        user: {
            stores: {
                id: string;
                createdAt: Date;
                updatedAt: Date;
                title: string;
                description: string | null;
                userId: string | null;
            }[];
            favorites: {
                id: string;
                createdAt: Date;
                updatedAt: Date;
                title: string;
                description: string;
                size: string[];
                storeId: string | null;
                categoryId: string | null;
                userId: string | null;
            }[];
            orders: {
                discount: number;
                id: string;
                createdAt: Date;
                updatedAt: Date;
                userId: string | null;
                currency: string;
                status: import(".prisma/client").$Enums.EnumOrderStatus;
                total: number;
            }[];
        } & {
            name: string;
            email: string;
            password: string | null;
            role: string;
            phone: string;
            social: string;
            discountArch: string[];
            id: string;
            createdAt: Date;
            updatedAt: Date;
            picture: string;
        };
    }>;
    addRefreshTokenToResponse(res: Response, refreshToken: string): void;
    removeRefreshTokenFromResponse(res: Response): void;
}
