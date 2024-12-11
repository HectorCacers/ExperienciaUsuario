const express = require('express');
const router = express.Router();
const restauranteController = require('./restauranteController');

router.get('/restaurants', restauranteController.getRestaurants);
router.get('/restaurants/availability', restauranteController.getAvailability);
router.put('/restaurants/reserve', restauranteController.reserveRestaurant);

module.exports = router;
