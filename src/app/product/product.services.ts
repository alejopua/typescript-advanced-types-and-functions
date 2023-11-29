import { faker } from '@faker-js/faker';
import { CreateProductDto, UpdateProductDto, FindProductDto } from './product.dto';
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

export const findProduct = (dto: FindProductDto): Product[] => {
    const entries = Object.entries(dto);
    const productsFiltered = products.filter(item => (entries.every(([key, value]) => item[key] === value)))
    return productsFiltered;
}

export const updateProduct = (idTo: Product['id'] | number, changes: UpdateProductDto): Product => {
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