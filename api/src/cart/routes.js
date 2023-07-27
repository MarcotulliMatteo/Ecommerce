const { Router } = require('express');
const router = Router();

const controller = require('./controller');
const simulateDalay = require('../../middleware/simulateDelay');

router.get('/:userId', simulateDalay, controller.getUserCart);
router.post('/:userId', simulateDalay, controller.insertProductInCart);
router.delete('/:userId/:productId', simulateDalay, controller.removeProductFromCart);

module.exports = router;