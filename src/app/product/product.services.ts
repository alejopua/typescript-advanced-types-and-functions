import { faker } from '@faker-js/faker';
import { CreateProductDto, UpdateProductDto } from './product.dto';
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

export const updateProduct = (idTo: string | number, changes: UpdateProductDto): Product => {
    const index = products.findIndex((item)=> item.id === idTo);
    const productOk = products[index];
    products[index] = {
        ...productOk,
        ...changes,
        updatedAt: new Date()
    }

    return products[index];
}

export const deleteProduct = (item: Product) => {

}


//CRUD