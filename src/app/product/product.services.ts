import { faker } from '@faker-js/faker';
import { CreateProductDto } from './product.dto';
import { Product } from './product.model';

export const products: Product[] = [];

export const addProduct = (item: CreateProductDto): Product => {
    const newProduct = {
        ...item,
        id: faker.string.uuid(),
        createdAt: faker.date.recent(),
        updatedAt: faker.date.recent(),
        category: {
            name: faker.commerce.department(),
            description: faker.commerce.productDescription()
        }
    
    }
    products.push(newProduct);
    return newProduct;
}

export const readProduct = (item: Product) => {
}

export const updateProduct = (item: Product) => {

}

export const deleteProduct = (item: Product) => {

}


//CRUD