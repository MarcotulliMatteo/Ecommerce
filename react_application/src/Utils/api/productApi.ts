import { BASE_URL, PRODUCT_API } from "../endpoints"
import { Product } from "../types"

export const fetchProductById = (productId: string, callback: (product: Product) => void) => {
    fetch(`${BASE_URL}${PRODUCT_API}${productId}`)
        .then(res => res.json())
        .then(data => callback(data.results as Product));
}