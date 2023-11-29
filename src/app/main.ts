import { addProduct, products } from "./product/product.services";
import { faker } from '@faker-js/faker';


for (let index = 0; index < 5; index++) {
    addProduct(
        {
            name: faker.commerce.productName(),
            price: faker.commerce.price(),
            description: faker.commerce.productDescription(),
            color: faker.commerce.productMaterial(),
            stock: 10,
            isNew: faker.datatype.boolean(),
            categoryId: faker.string.uuid()
        }
    )
}

console.log('Product added!', products);