import type { Category } from '@/interfaces/category.ts';

export interface Product {
    id: number;
    title: string;
    price: number;
    description: number;
    images: string[];
    creationAt: Date;
    updatedAt: Date;
    category: Category;
}
