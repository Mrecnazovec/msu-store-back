import { PrismaService } from 'src/prisma.service';
import { AuthDto } from 'src/auth/dto/auth.dto';
import { UpdateSettingDto } from './dto/update-role.dto';
import { UpdateUserDto } from './dto/update-user.dto';
export declare class UserService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    getAll(): Promise<{
        name: string;
        email: string;
        role: string;
        social: string;
        id: string;
        picture: string;
    }[]>;
    getById(id: string): Promise<({
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
    }) | null>;
    getByEmail(email: string): Promise<({
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
    }) | null>;
    toggleFavorite(productId: string, userId: string): Promise<boolean>;
    create(dto: AuthDto): Promise<{
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
    update(userId: string, dto: UpdateUserDto): Promise<{
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
    updateSetting(userId: string, dto: UpdateSettingDto): Promise<{
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
