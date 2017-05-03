const schema = `
  type Team {
    _id: String
    name: String
    base: String
    chassis: String
    engine: String
    first_entry: String
    championships: Int
    highest_finish: String
    podiums: Int
    poles: Int
    fastest_laps: Int
    team_chief: String
    picture: String
    technical_chief: String
    drivers: [Driver]
  }
`;

module.exports = schema;