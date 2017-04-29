const Drivers = require('./driver.model');

const list = (params, callback) => {
  Drivers
    .find(params)
    .lean()
    .exec(callback);
};

const getTeam = (params, callback) => {
  Drivers
    .findOne(params)
    .lean()
    .exec(callback);
}

module.exports = {
  list,
  getTeam
}