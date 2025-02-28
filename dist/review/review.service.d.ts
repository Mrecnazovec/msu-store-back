import { PrismaService } from 'src/prisma.service';
import { ReviewDto } from './dto/review.dto';
import { ProductService } from 'src/product/product.service';
export declare class ReviewService {
    private prisma;
    private productService;
    constructor(prisma: PrismaService, productService: ProductService);
    getByStoreId(storeId: string): Promise<({
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
    })[]>;
    getById(id: string, userId: string): Promise<{
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
    }>;
    create(userId: string, productId: string, storeId: string, dto: ReviewDto): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        storeId: string | null;
        userId: string | null;
        productId: string | null;
        text: string;
        rating: number;
    }>;
    delete(id: string, userId: string): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        storeId: string | null;
        userId: string | null;
        productId: string | null;
        text: string;
        rating: number;
    }>;
}
