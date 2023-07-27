const express = require('express');
const app = express();

var cors = require('cors');

const port = 4000;
const BASE_URL = '/api/v1';

const generateRaccomandations = require('./cron/generateRaccomandations');

const productsRouter = require('./src/products/routes');
const cartRouter = require('./src/cart/routes');
const raccomandationsRouter = require('./src/raccomandations/routes');

app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
    res.send('Ecommerce API');
})

app.use(`${BASE_URL}/products`, productsRouter);
app.use(`${BASE_URL}/cart`, cartRouter);
app.use(`${BASE_URL}/raccomandations`, raccomandationsRouter);

generateRaccomandations();

app.listen(port, () => {
    console.log(`App is listening on port ${port}...`)
})