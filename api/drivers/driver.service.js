const Drivers = require('./driver.model');

const list = (params, callback) => {
  Drivers
    .find(params)
    .lean()
    .exec(callback);
};

const getDrivers = (params, callback) => {
  Drivers
    .find(params)
    .lean()
    .exec(callback);
}

module.exports = {
  list,
  getDrivers
}