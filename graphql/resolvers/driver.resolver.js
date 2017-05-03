const DriverService = require('../../api/drivers/driver.service');

const drivers = [
  {
    name: 'Lewis Hamilton',
    badge: 44,
    country: 'United Kingdom',
    podiums: 107,
    points: 2320,
    races: 192,
    championships: 3,
    highest_finish: '1 (x54)',
    highest_grid: 1,
    dob: '07/01/1985',
    birth_place: 'Stevenage, England',
    picture: ''
  },
  {
    name: 'Sebastian Vettel',
    badge: 5,
    country: 'Germany',
    podiums: 90,
    points: 2194,
    races: 183,
    championships: 4,
    highest_finish: '1 (x44)',
    highest_grid: 1,
    dob: '03/07/1987',
    birth_place: 'Heppenheim, Germany',
    picture: ''
  },
  {
    name: 'Valtteri Bottas',
    badge: 77,
    country: 'Finland',
    podiums: 12,
    points: 474,
    races: 82,
    championships: 0,
    highest_finish: '1 (x1)',
    highest_grid: 1,
    dob: '28/08/1989',
    birth_place: 'Nastola, Finland',
    picture: ''
  },
  {
    name: 'Kimi Räikkönen',
    badge: 7,
    country: 'Finland',
    podiums: 85,
    points: 1409,
    races: 257,
    championships: 1,
    highest_finish: '1 (x20)',
    highest_grid: 1,
    dob: '17/10/1979',
    birth_place: 'Espoo, Finland',
    picture: ''
  },
  {
    name: 'Max Verstappen',
    badge: 33,
    country: 'Netherlands',
    podiums: 8,
    points: 288,
    races: 44,
    championships: 0,
    highest_finish: '1 (x1)',
    highest_grid: 2,
    dob: '30/09/1997',
    birth_place: 'Hasselt, Belgium',
    picture: ''
  },
  {
    name: 'Daniel Ricciardo',
    badge: 3,
    country: 'Australia',
    podiums: 18,
    points: 638,
    races: 113,
    championships: 0,
    highest_finish: '1 (x4)',
    highest_grid: 1,
    dob: '01/07/1989',
    birth_place: 'Perth, Australia',
    picture: ''
  },
  {
    name: 'Sergio Perez',
    badge: 11,
    country: 'Mexico',
    podiums: 7,
    points: 389,
    races: 120,
    championships: 0,
    highest_finish: '2 (x2)',
    highest_grid: 4,
    dob: '26/01/1990',
    birth_place: 'Guadalajara, Mexico',
    picture: ''
  },
  {
    name: 'Felipe Massa',
    badge: 19,
    country: 'Brazil',
    podiums: 41,
    points: 1142,
    races: 255,
    championships: 0,
    highest_finish: '1 (x11)',
    highest_grid: 1,
    dob: '25/04/1981',
    birth_place: 'Sao Paulo, Brazil',
    picture: ''
  },
  {
    name: 'Carlos Sainz',
    badge: 55,
    country: 'Spain',
    podiums: 0,
    points: 75,
    races: 44,
    championships: 0,
    highest_finish: '6 (x3)',
    highest_grid: 5,
    dob: '01/09/1994',
    birth_place: 'Madrid, Spain',
    picture: ''
  },
  {
    name: 'Esteban Ocon',
    badge: 31,
    country: 'France',
    podiums: 0,
    points: 9,
    races: 13,
    championships: 0,
    highest_finish: '7 (x1)',
    highest_grid: 10,
    dob: '17/09/1996',
    birth_place: 'Évreux, Normandy',
    picture: ''
  },
  {
    name: 'Nico Hulkenberg',
    badge: 27,
    country: 'Germany',
    podiums: 0,
    points: 368,
    races: 121,
    championships: 0,
    highest_finish: '4 (x3)',
    highest_grid: 1,
    dob: '19/08/1987',
    birth_place: 'Emmerich am Rhein, Germany',
    picture: ''
  },
  {
    name: 'Romain Grosjean',
    badge: 8,
    country: 'France',
    podiums: 10,
    points: 320,
    races: 108,
    championships: 0,
    highest_finish: '2 (x2)',
    highest_grid: 2,
    dob: '17/04/1986',
    birth_place: 'Geneva, Switzerland',
    picture: ''
  },
  {
    name: 'Kevin Magnussen',
    badge: 20,
    country: 'Denmark',
    podiums: 1,
    points: 66,
    races: 45,
    championships: 0,
    highest_finish: '2 (x1)',
    highest_grid: 4,
    dob: '05/10/1992',
    birth_place: 'Roskilde, Denmark',
    picture: ''
  },
  {
    name: 'Daniil Kvyat',
    badge: 26,
    country: 'Russian Federation',
    podiums: 2,
    points: 130,
    races: 63,
    championships: 0,
    highest_finish: '2 (x1)',
    highest_grid: 4,
    dob: '26/04/1994',
    birth_place: 'Ufa, Russia',
    picture: ''
  },
  {
    name: 'Pascal Wehrlein',
    badge: 94,
    country: 'Germany',
    podiums: 0,
    points: 1,
    races: 23,
    championships: 0,
    highest_finish: '10 (x1)',
    highest_grid: 12,
    dob: '18/10/1994',
    birth_place: 'Sigmaringen, Germany',
    picture: ''
  },
  {
    name: 'Lance Stroll',
    badge: 18,
    country: 'Canada',
    podiums: 0,
    points: 0,
    races: 4,
    championships: 0,
    highest_finish: '11 (x1)',
    highest_grid: 10,
    dob: '29/10/1998',
    birth_place: 'Montreal, Canada',
    picture: ''
  },
  {
    name: 'Antonio Giovinazzi',
    badge: 36,
    country: 'Italy',
    podiums: 0,
    points: 0,
    races: 2,
    championships: 0,
    highest_finish: '12 (x1)',
    highest_grid: 16,
    dob: '14/12/1993',
    birth_place: 'Martina Franca, Italy',
    picture: ''
  },
  {
    name: 'Jolyon Palmer',
    badge: 30,
    country: 'United Kingdom',
    podiums: 0,
    points: 1,
    races: 25,
    championships: 0,
    highest_finish: '10 (x1)',
    highest_grid: 10,
    dob: '20/01/1991',
    birth_place: 'Horsham, England',
    picture: ''
  },
  {
    name: 'Stoffel Vandoorne',
    badge: 2,
    country: 'Belgium',
    podiums: 0,
    points: 1,
    races: 5,
    championships: 0,
    highest_finish: '10 (x1)',
    highest_grid: 12,
    dob: '26/03/1992',
    birth_place: 'Kortrijk, Belgium',
    picture: ''
  },
  {
    name: 'Fernando Alonso',
    badge: 14,
    country: 'Spain',
    podiums: 97,
    points: 1832,
    races: 278,
    championships: 2,
    highest_finish: '1 (x32)',
    highest_grid: 1,
    dob: '29/07/1981',
    birth_place: 'Oviedo, Spain',
    picture: ''
  },
  {
    name: 'Marcus Ericsson',
    badge: 9,
    country: 'Sweden',
    podiums: 0,
    points: 9,
    races: 60,
    championships: 0,
    highest_finish: '8 (x1)',
    highest_grid: 9,
    dob: '02/09/1990',
    birth_place: 'Kumla, Sweden',
    picture: ''
  }
]

const list = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(drivers);
    }, 100);
  });
}

const fetch = (args) => {
  console.log(args);
  return [{name: 'Lewis'}];
}

module.exports = {
  list,
  fetch
}