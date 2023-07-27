const products = require('../../data/products');
const uuid = require('uuid');

const getProducts = (req, res) => {
    res.json({
        results : products
    })
}

const getProductsById = (req, res) => {
    const productId = req.params.id;
    const product = products.find(elem => elem.ID == productId);
    res.json({
        results: product
    })
}

const insertProduct = (req, res) => {
    const payload = req.body;
    if(!payload) res.status(500).send('Specify data payload');
    payload.ID = uuid.v1();
    products.push(payload);
    res.json({
        results: payload
    });
}


const removeProduct = (req, res) => {
    const productId = req.params.id;
    const productIndex = products.findIndex(product => product.ID === productId);
    if(productIndex !== -1) products.slice(productIndex, 1);
    res.send('Product removed');
}

const searchProduct = (req, res) => {
    const searchText = req.params.text;
    console.log(searchText)
    const searchedProducts = products.filter(prod => prod.name.toLocaleLowerCase().includes(searchText.toLocaleLowerCase()) 
        || prod.description.toLocaleLowerCase().includes(searchText.toLocaleLowerCase()));
    res.json({
        results: searchedProducts
    })
}

module.exports = {
    getProducts,
    insertProduct,
    removeProduct,
    searchProduct,
    getProductsById
}