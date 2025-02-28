import { CreateProductDto } from 'src/product/dto/create-product.dto';
declare class OrderItemDto {
    id: string;
    quantity: number;
    price: number;
    size: string;
    product?: CreateProductDto | null;
}
declare class OrderUserDto {
    id: string;
    email: string;
    password: string | null;
    name: string;
    role: string;
    picture: string;
    phone: string;
    social: string;
}
export declare class TelegramSendDto {
    id: string;
    status: string;
    total: number;
    currency: string;
    discount: number;
    items: OrderItemDto[];
    user: OrderUserDto;
}
export {};
