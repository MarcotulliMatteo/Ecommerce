const cart = require('../../data/cart');

const getUserCart = (req, res) => {
    const userId = req.params.userId;
    const userCart = cart.filter(elem => elem.userID == userId);
    res.json({
        results: userCart
    })
}

const insertProductInCart = (req, res) => {
    const userId = req.params.userId;
    const payload = req.body;
    if(!req.body) res.status(500).send('Specify data payload');
    const productIndex = cart.findIndex(elem => elem.userID == userId && elem.productID == payload.productID);
    if(productIndex !== -1) {
        cart[productIndex].quantity += parseInt(payload.quantity);
        if(cart[productIndex].quantity <= 0) {
            cart.splice(productIndex, 1);
        }
    } else {
        cart.push(payload);
    }
    res.json({
        results: payload
    });
}

const removeProductFromCart = (req, res) => {
    const userId = req.params.userId;
    const productId = req.params.productId;
    const productIndex = cart.findIndex(elem => elem.userID === userId && elem.productID === productId);
    if(productIndex !== -1) cart.splice(productIndex, 1);
    res.send('Product removed from cart');
}

module.exports = {
    getUserCart,
    removeProductFromCart,
    insertProductInCart
}