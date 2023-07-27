const { Router } = require('express');
const router = Router();

const controller = require('./controller');
const simulateDalay = require('../../middleware/simulateDelay');

router.get('/', simulateDalay, controller.getProducts);
router.get('/:id', simulateDalay, controller.getProductsById);
router.get('/search/:text', simulateDalay, controller.searchProduct);
router.post('/', simulateDalay, controller.insertProduct);
router.delete('/:id', simulateDalay, controller.removeProduct);

module.exports = router;