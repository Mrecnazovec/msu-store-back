export declare class OrderCreateDto {
    status: string;
    currency: string;
    discount: number;
    items: OrderItemDto[];
}
export declare class OrderItemDto {
    quantity: number;
    price: number;
    size: string;
    color: string;
    productId: string;
    storeId: string;
}
