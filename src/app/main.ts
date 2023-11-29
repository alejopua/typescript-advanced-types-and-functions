import { addProduct, products } from "./product/product.services";
import { faker } from '@faker-js/faker';


for (let index = 0; index < 5; index++) {
    addProduct(
        {
            id: faker.string.uuid(),
            createdAt: faker.date.recent(),
            updatedAt: faker.date.recent(),
            name: faker.commerce.productName(),
            price: faker.commerce.price(),
            description: faker.commerce.productDescription(),
            color: faker.commerce.productMaterial(),
            stock: 10,
            category: {
                name: faker.commerce.department(),
                description: faker.commerce.productDescription(),
            },
            isNew: faker.datatype.boolean(),
        }
    )
}

console.log('Product added!', products);