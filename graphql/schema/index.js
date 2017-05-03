const driverSchema = require('./driver.schema');
const teamSchema = require('./team.schema');

const rootSchema = `
  ${driverSchema}

  ${teamSchema}

  type Query {
    teams: [Team]
    team(friendly_url: String): Team 
    drivers: [Driver]
    driver(badge: Int): Driver
  }
`;

module.exports = rootSchema;