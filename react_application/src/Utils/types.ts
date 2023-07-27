export type Product = {
    ID: string,
    name: string,
    description: string,
    price: number,
    currency: string,
    category: string,
    thumbnail: string
}

export type Cart = {
    productID: string,
    userID: string,
    quantity: number,
    category: string,
    price: number,
    currency: string
}