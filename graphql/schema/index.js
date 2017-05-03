const driverSchema = require('./driver.schema');
const teamSchema = require('./team.schema');

const rootSchema = `
  ${driverSchema}

  ${teamSchema}

  type Query {
    teams: [Team]
    team(_id: String): Team 
    drivers: [Driver]
    driver(badge: Int): Driver
  }
`;

module.exports = rootSchema;