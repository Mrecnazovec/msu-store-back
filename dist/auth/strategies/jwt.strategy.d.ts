import { ConfigService } from '@nestjs/config';
import { Strategy } from 'passport-jwt';
import { UserService } from 'src/user/user.service';
declare const JwtStrategy_base: new (...args: [opt: import("passport-jwt").StrategyOptionsWithRequest] | [opt: import("passport-jwt").StrategyOptionsWithoutRequest]) => Strategy & {
    validate(...args: any[]): unknown;
};
export declare class JwtStrategy extends JwtStrategy_base {
    private readonly configService;
    private readonly userService;
    constructor(configService: ConfigService, userService: UserService);
    validate({ id }: {
        id: string;
    }): Promise<{
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
    }>;
}
export {};
