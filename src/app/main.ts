import { addProduct, products, updateProduct, findProduct } from "./product/product.services";
import { faker, tr } from '@faker-js/faker';


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

const product1 = products[0];

const rta = updateProduct(product1.id, {
    name: 'Shoes'
})

console.log('Product 1', rta);

const rta2 = findProduct({
    isNew: true
})

console.log('Find Products: ', rta2);