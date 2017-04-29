const Teams = require('./team.model');

const list = (params, callback) => {
  Teams
    .find(params)
    .lean()
    .exec(callback);
};

const getTeam = (params, callback) => {
  Teams
    .findOne(params)
    .lean()
    .exec(callback);
}

module.exports = {
  list,
  getTeam
}