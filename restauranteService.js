const { Restaurant, RestaurantAvailability } = require('./restauranteModel');

const getRestaurants = async (limit, offset) => {
    return await Restaurant.findAll({ limit, offset });
};

const getAvailability = async () => {
    const now = new Date();
    return await RestaurantAvailability.findAll({
        where: {
            date_time: { [Sequelize.Op.gt]: now },
            reserved: false
        }
    });
};

const reserveRestaurant = async (personName, scheduleTime, restaurantId) => {
    const availability = await RestaurantAvailability.findOne({
        where: { restaurant_id: restaurantId, date_time: scheduleTime }
    });
    if (!availability) throw new Error('no existente');
    if (availability.reserved) throw new Error('The selected time is ya esta reservado reserved');

    availability.reserved = true;
    availability.reserved_by = personName;
    await availability.save();
    return { message: 'reservacion exitosa' };
};

module.exports = { getRestaurants, getAvailability, reserveRestaurant };
