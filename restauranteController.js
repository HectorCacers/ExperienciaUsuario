const restauranteService = require('./restauranteService');

const getRestaurants = async (req, res) => {
    const limit = parseInt(req.query.limit) || 10;
    const offset = parseInt(req.query.offset) || 0;
    const restaurants = await restauranteService.getRestaurants(limit, offset);
    res.json(restaurants);
};

const getAvailability = async (req, res) => {
    const availability = await restauranteService.getAvailability();
    res.json(availability);
};

const reserveRestaurant = async (req, res) => {
    const { personName, scheduleTime, restaurantId } = req.body;
    if (!personName || !scheduleTime || !restaurantId) {
        return res.status(400).json({ error: 'Missing required parameters' });
    }
    try {
        const reservation = await restauranteService.reserveRestaurant(personName, scheduleTime, restaurantId);
        res.json(reservation);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

module.exports = { getRestaurants, getAvailability, reserveRestaurant };
