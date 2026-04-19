export interface Product {
    id: number;
    name: string;
    description: string;
    price: number;
    categories: string;
    image_url?: string;
}

/* 🔹 Props */
interface ProductProps {
    products: Product[];
}