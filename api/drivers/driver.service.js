const Drivers = require('./driver.model');

const list = (params, callback) => {
  Drivers
    .find(params)
    .lean()
    .exec(callback);
};

const getDriver = (params, callback) => {
  Drivers
    .findOne(params)
    .lean()
    .exec(callback);
}

module.exports = {
  list,
  getDriver
}