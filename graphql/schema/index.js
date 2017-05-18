const driverSchema = require('./driver.schema');
const teamSchema = require('./team.schema');

const rootSchema = `
  ${driverSchema}

  ${teamSchema}

  type Query {
    teams(limit: Int, skip: Int): [Team]
    team(friendly_url: String): Team 
    drivers(limit: Int, skip: Int): [Driver]
    driver(badge: Int): Driver
  }
`;

module.exports = rootSchema;