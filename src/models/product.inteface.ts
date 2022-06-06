export interface Product {
    code: string;
    description: string;
    imageUrl: string;
    name: string;
    price: number;
    priceByUnit: number;
    rating: number;
    state: boolean;
    type: string;
    key?: string
}
