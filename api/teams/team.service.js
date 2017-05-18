const Teams = require('./team.model');

const list = (params, options, callback) => {
  Teams
    .find(params)
    .lean()
    .skip(options.skip || 0)
    .limit(options.limit || 10)
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