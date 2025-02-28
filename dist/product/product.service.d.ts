import { PrismaService } from 'src/prisma.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
export declare class ProductService {
    private prisma;
    constructor(prisma: PrismaService);
    getAll(searchTerm?: string): Promise<({
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
    })[]>;
    getById(id: string): Promise<{
        category: {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            title: string;
            description: string;
            storeId: string | null;
        } | null;
        reviews: ({
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
        } & {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            storeId: string | null;
            userId: string | null;
            productId: string | null;
            text: string;
            rating: number;
        })[];
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
    }>;
    getByStoreId(storeId: string): Promise<({
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
    })[]>;
    getByCategory(categoryId: string): Promise<({
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
    })[]>;
    getMostPopular(): Promise<({
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
    })[]>;
    getSimilar(id: string): Promise<({
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
    })[]>;
    create(storeId: string, dto: CreateProductDto): Promise<{
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
    }>;
    update(id: string, dto: UpdateProductDto): Promise<{
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
    }>;
    delete(id: string): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        title: string;
        description: string;
        size: string[];
        storeId: string | null;
        categoryId: string | null;
        userId: string | null;
    }>;
}
