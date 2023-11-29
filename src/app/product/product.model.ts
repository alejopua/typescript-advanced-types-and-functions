import { Categories } from '../categories/categories.model';
import { BasesModel } from '../bases.model';

type Sizes = 'S' | 'M' | 'L' | 'XL';

export interface Product extends BasesModel {
    name: string;
    price: number | string;
    description?: string; 
    color: string;
    size?: Sizes;
    stock: number;
    category?: Categories;
    isNew: boolean;
}
