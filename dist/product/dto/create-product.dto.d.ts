declare class CreateColorDto {
    name: string;
    value: string;
    images?: {
        url: string;
    }[];
}
declare class CreatePriceDto {
    currency: string;
    price: string;
}
export declare class CreateProductDto {
    title: string;
    description: string;
    size: string[];
    prices: CreatePriceDto[];
    categoryId?: string;
    colors?: CreateColorDto[];
}
export {};
