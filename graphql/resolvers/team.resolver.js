const TeamServide = require('../../api/teams/team.service');
const teams = [
  {
    name: 'Scuderia Ferrari',
    base: 'Maranello, Italy',
    chassis: 'SF70H',
    engine: 'Ferrari',
    first_entry: '1950',
    championships: 16,
    highest_finish: '1 (x227)',
    podiums: 722,
    poles: 201,
    fastest_laps: 237,
    team_chief: 'Maurizio Arrivabene',
    picture: '',
    technical_chief: 'Mattia Binotto'
  },
  {
    name: 'Mercedes AMG Petronas F1 ',
    base: 'Brackley, United Kingdom',
    chassis: 'F1 W08 EQ Power+',
    engine: '	Mercedes',
    first_entry: '1970',
    championships: 3,
    highest_finish: '1 (x56)',
    podiums: 116,
    poles: 68,
    fastest_laps: 40,
    team_chief: 'Toto Wolff',
    picture: '',
    technical_chief: 'James Allison'
  },
  {
    name: 'Red Bull Racing',
    base: 'Milton Keynes, United Kingdom',
    chassis: 'RB13',
    engine: 'TAG Heuer',
    first_entry: '1997',
    championships: 4,
    highest_finish: '1 (x52)',
    podiums: 136,
    poles: 58,
    fastest_laps: 52,
    team_chief: 'Christian Horner',
    picture: '',
    technical_chief: 'Adrian Newey'
  },
  {
    name: 'Sahara Force India F1 Team',
    base: 'Silverstone, United Kingdom',
    chassis: 'VJM10',
    engine: 'Mercedes',
    first_entry: '1991',
    championships: 0,
    highest_finish: '	2 (x1)',
    podiums: 5,
    poles: 1,
    fastest_laps: 4,
    team_chief: 'Vijay Mallya',
    picture: '',
    technical_chief: 'Andrew Green'
  },
  {
    name: 'Williams Martini Racing',
    base: 'Grove, United Kingdom',
    chassis: 'FW40',
    engine: 'Mercedes',
    first_entry: '1978',
    championships: 9,
    highest_finish: '1 (x114)',
    podiums: 310,
    poles: 128,
    fastest_laps: 133,
    team_chief: 'Frank Williams',
    picture: '',
    technical_chief: 'Paddy Lowe'
  },
  {
    name: 'Scuderia Toro Rosso',
    base: 'Faenza, Italy',
    chassis: 'STR12',
    engine: 'Renault',
    first_entry: '1985',
    championships: 0,
    highest_finish: '1 (x1)',
    podiums: 1,
    poles: 1,
    fastest_laps: 1,
    team_chief: 'Franz Tost',
    picture: '',
    technical_chief: 'James Key'
  },
  {
    name: 'Haas F1 Team',
    base: 'Kannapolis, United States',
    chassis: 'VF-17',
    engine: 'Ferrari',
    first_entry: '2016',
    championships: 0,
    highest_finish: '5 (x1)',
    podiums: 0,
    poles: 0,
    fastest_laps: 0,
    team_chief: 'Guenther Steiner',
    picture: '',
    technical_chief: 'Rob Taylor'
  },
  {
    name: 'Renault Sport F1 Team',
    base: 'Enstone, United Kingdom',
    chassis: 'R.S.17',
    engine: 'Renault',
    first_entry: '1986',
    championships: 2,
    highest_finish: '1 (x20)',
    podiums: 59,
    poles: 20,
    fastest_laps: 13,
    team_chief: 'Cyril Abiteboul',
    picture: '',
    technical_chief: 'Bob Bell'
  },
  {
    name: 'Sauber F1 Team',
    base: 'Hinwil, Switzerland',
    chassis: 'C36',
    engine: 'Ferrari',
    first_entry: '1993',
    championships: 0,
    highest_finish: '1 (x1)',
    podiums: 27,
    poles: 1,
    fastest_laps: 5,
    team_chief: 'Monisha Kaltenborn',
    picture: '',
    technical_chief: 'Jorg Zander'
  },
  {
    name: 'McLaren Honda',
    base: 'Woking, United Kingdom',
    chassis: 'MCL32',
    engine: 'Honda',
    first_entry: '1966',
    championships: 8,
    highest_finish: '1 (x182)',
    podiums: 485,
    poles: 155,
    fastest_laps: 154,
    team_chief: 'Eric Boullier',
    picture: '',
    technical_chief: 'Tim Goss'
  }
]
const list = (args, req, next, y) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(teams);
    }, 100);
  });
}

const fetch = (args) => {
  console.log(args, "team");
  return {name: 'Mercedes'};
}

module.exports = {
  list,
  fetch
}