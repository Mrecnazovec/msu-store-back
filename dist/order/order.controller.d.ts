import { OrderService } from './order.service';
import { OrderCreateDto } from './dto/order-create.dto';
import { UpdateOrderStatusDto } from './dto/order-update.dto';
export declare class OrderController {
    private readonly orderService;
    constructor(orderService: OrderService);
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
    getOrdersByUserId(userId: string): Promise<({
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
