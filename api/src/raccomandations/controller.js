const productRacc = require('../../data/raccomandations');

const getRaccomandations = (req, res) => {
    const userId = req.params.userId;
    let userProductRacc = productRacc[userId];
    if(!userProductRacc) userProductRacc = [];
    res.json({
        results: userProductRacc
    })
}

module.exports = {
    getRaccomandations
};