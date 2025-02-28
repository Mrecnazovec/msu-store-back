import { ColorService } from './color.service';
import { CreateColorDto } from './dto/create-color.dto';
import { UpdateColorDto } from './dto/update-color.dto';
export declare class ColorController {
    private readonly colorService;
    constructor(colorService: ColorService);
    getAll(): Promise<({
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
    })[]>;
    getById(id: string): Promise<{
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
    }>;
    create(dto: CreateColorDto): Promise<{
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
    }>;
    update(id: string, dto: UpdateColorDto): Promise<{
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
    }>;
    delete(id: string): Promise<{
        name: string;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        productId: string | null;
        value: string;
    }>;
}
