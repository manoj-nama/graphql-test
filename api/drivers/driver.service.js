const Drivers = require('./driver.model');

const list = (params, options, callback) => {
  Drivers
    .find(params)
    .lean()
    .skip(options.skip || 0)
    .limit(options.limit || 10)
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