import { Request, Response } from 'express';
import { AuthService } from './auth.service';
import { AuthDto } from './dto/auth.dto';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    login(dto: AuthDto, res: Response): Promise<{
        accessToken: string;
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
    register(dto: AuthDto, res: Response): Promise<{
        accessToken: string;
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
    getNewTokens(req: Request, res: Response): Promise<{
        accessToken: string;
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
    logout(res: Response): Promise<boolean>;
    googleAuth(_req: any): Promise<void>;
    googleAuthCallback(req: any, res: Response): Promise<void>;
    yandexAuth(req: any): Promise<void>;
    yandexAuthCallback(req: any, res: Response): Promise<void>;
}
