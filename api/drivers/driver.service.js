const Drivers = require('./driver.model');
const Team = require('../teams/team.model');

const list = (params, callback) => {
  Drivers
    .find(params)
    .lean()
    .exec(callback);
};

const getTeam = (params, callback) => {
  Team
    .findOne(params)
    .lean()
    .exec(callback);
}

module.exports = {
  list,
  getTeam
}