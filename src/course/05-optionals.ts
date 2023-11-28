export const product = (
    name: string,
    price: number,
    description?: string,
    stock?: number,
    productNew?: boolean
) => {
    return console.log({
        name,
        price,
        description: description ?? 'No description available',
        stock: stock ?? 1,
        productNew: productNew ?? true
    });
}

product('Phone', 100);