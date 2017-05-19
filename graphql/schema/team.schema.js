const Team = `
  type Team {
    _id: String

    #name of the team
    name: String

    # Location where team is based
    base: String

    # The current car's chassis
    chassis: String

    # Engine manufacturer
    engine: String

    # First entered Formula1
    first_entry: String

    # No of Championships won
    championships: Int

    # Highest finish by the team
    highest_finish: String

    # No. of podiums won
    podiums: Int

    # No. of poles in qualification
    poles: Int

    # Total fastest laps in races
    fastest_laps: Int

    # Current team chief
    team_chief: String

    # Team logo
    picture: String

    # Current technical chief
    technical_chief: String

    # Current Drivers lineup
    drivers: [Driver]
  }
`;

module.exports = Team;