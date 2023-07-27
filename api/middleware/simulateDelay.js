const simulateDalay = (req, res, next) => {
    new Promise(resolve => {
        setTimeout(() => {
            resolve();
        }, 1000)
    }).then(() => next())
}

module.exports = simulateDalay;