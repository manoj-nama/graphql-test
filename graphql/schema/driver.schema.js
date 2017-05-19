const Driver = `
  type Driver {
    _id: String
    name: String
    badge: Int
    country: String
    podiums: Int
    points: Int
    races: Int
    championships: Int
    highest_finish: String
    highest_grid: Int
    dob: String
    birth_place: String
    picture: String,
    team: Team
  }
`;

module.exports = Driver;