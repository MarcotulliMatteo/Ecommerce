const cron = require('node-cron');
const users = require('../data/users');
const cart = require('../data/cart');
const products = require('../data/products');
const raccomandations = require('../data/raccomandations');

const generateRaccomandations = () => {
    cron.schedule('* * * * *', function() {
        console.log('running a task every minute');
        for(let user of users) {
            const userId = user.ID;
            const categoryInCart = cart.filter(product => product.userID == userId).map(prod => prod.category)
            const categoryInCartDistinct = [...new Set(categoryInCart)];
            const raccProducts = [];
            for(let category of categoryInCartDistinct) {
                const raccProdCategory = products
                    .filter(prod => prod.category === category)
                    .sort(() => 0.5 - Math.random())
                    .slice(0, 2);
                raccProducts.push(...raccProdCategory);
                if(raccProdCategory.length > 20) break;
            }
            raccomandations[userId] = raccProducts;
        }
    });
}

module.exports = generateRaccomandations;