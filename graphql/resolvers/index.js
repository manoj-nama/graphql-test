const driverResolver = require('./driver.resolver');
const teamResolver = require('./team.resolver');

module.exports = {
  Query: {
    drivers: driverResolver.list,
    teams: teamResolver.list
  },
  Driver: {
    team: teamResolver.fetch
  },
  Team: {
    drivers: driverResolver.fetch
  }
};