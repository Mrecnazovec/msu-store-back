import { DiscountService } from './discount.service';
import { DiscountDto } from './dto/discount.dto';
export declare class DiscountController {
    private readonly discountService;
    constructor(discountService: DiscountService);
    getAll(): Promise<{
        discount: number;
        name: string;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        quantity: number;
    }[]>;
    getById(id: string): Promise<{
        discount: number;
        name: string;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        quantity: number;
    }>;
    useDiscount(id: string): Promise<{
        discount: number;
        name: string;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        quantity: number;
    }>;
    getByName(name: string): Promise<{
        discount: number;
        name: string;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        quantity: number;
    }>;
    create(dto: DiscountDto): Promise<{
        discount: number;
        name: string;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        quantity: number;
    }>;
    update(id: string, dto: DiscountDto): Promise<{
        discount: number;
        name: string;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        quantity: number;
    }>;
    delete(id: string): Promise<{
        discount: number;
        name: string;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        quantity: number;
    }>;
}
