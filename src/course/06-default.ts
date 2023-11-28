export const product = (
    name: string,
    price: number,
    description: string = 'No description available',
    stock: number = 11,
    productNew: boolean = true
) => {
    return console.log({
        name,
        price,
        description,
        stock,
        productNew
    });
}

product('Phone', 100);
product('Phone', 100, '14 pro');
product('Phone', 100, '15 pro max', 10), false;