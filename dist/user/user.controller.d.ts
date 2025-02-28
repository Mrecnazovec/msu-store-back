import { UserService } from './user.service';
import { UpdateUserDto } from './dto/update-user.dto';
import { UpdateSettingDto } from './dto/update-role.dto';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    getProfile(id: string): Promise<({
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
    getAll(role: string): Promise<{
        name: string;
        email: string;
        role: string;
        social: string;
        id: string;
        picture: string;
    }[]>;
    toggleFavorite(userId: string, productId: string): Promise<boolean>;
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
    updateRole(userId: string, role: string, dto: UpdateSettingDto): Promise<{
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
    getProfileToUpdate(userId: string, role: string): Promise<({
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
}
