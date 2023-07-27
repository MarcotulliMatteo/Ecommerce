const { Router } = require('express');
const router = Router();

const controller = require('./controller');
const simulateDalay = require('../../middleware/simulateDelay');

router.get('/:userId', simulateDalay, controller.getRaccomandations);

module.exports = router;