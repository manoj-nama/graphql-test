const driverResolver = require('./driver.resolver');
const teamResolver = require('./team.resolver');

module.exports = {
  Query: {
    drivers: driverResolver.list,
    teams: teamResolver.list,
    team: teamResolver.fetch,
    driver: driverResolver.fetch
  },
  Driver: {
    team: teamResolver.fetch
  },
  Team: {
    drivers: driverResolver.list
  }
};