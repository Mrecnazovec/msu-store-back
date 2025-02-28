import { PrismaService } from 'src/prisma.service';
import { OrderCreateDto } from './dto/order-create.dto';
import { UpdateOrderStatusDto } from './dto/order-update.dto';
import { TelegramService } from './telegram.service';
export declare class OrderService {
    private prisma;
    private telegramService;
    constructor(prisma: PrismaService, telegramService: TelegramService);
    createOrder(userId: string, dto: OrderCreateDto): Promise<{
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
        } | null;
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
    }>;
    getOrdersByUser(userId: string): Promise<({
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
        } | null;
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
    })[]>;
    getOrdersById(id: string): Promise<({
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
        } | null;
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
    }) | null>;
    getOrdersByStoreId(storeId: string): Promise<({
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
        } | null;
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
    })[]>;
    getAllOrders(role: string): Promise<({
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
        } | null;
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
    })[]>;
    updateOrderStatus(orderId: string, dto: UpdateOrderStatusDto, role: string): Promise<{
        discount: number;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        userId: string | null;
        currency: string;
        status: import(".prisma/client").$Enums.EnumOrderStatus;
        total: number;
    }>;
}
