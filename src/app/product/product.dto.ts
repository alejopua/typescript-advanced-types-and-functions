import { Product } from "./product.model";

// utility type Omit and Pick - Dto's para creación
export interface CreateProductDto extends Omit<Product, 'id' | 'createdAt' | 'updatedAt' | 'category'> {
    categoryId: string;
}

type example = Pick<Product, 'color' | 'isNew'>;