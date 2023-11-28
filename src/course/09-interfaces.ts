interface Product {
    name: string;
    price: number;
    description?: string;
    stock: number;
    createdAt: Date;
}

const products: Product[] = [];

products.push({
    name: 'Smartphone',
    price: 500,
    stock: 10,
    createdAt: new Date(),
})

console.log(products);