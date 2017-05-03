const TeamService = require('../../api/teams/team.service');

const list = (args, req, next, y) => {
  return new Promise((resolve, reject) => {
    TeamService.list({}, (err, data) => {
      if(err) {
        return reject(err);
      }
      return resolve(data);
    });
  });
}

const fetch = (args) => new Promise((resolve, reject) => {
  const url = args.team_friendly_url || args.friendly_url;
  TeamService
    .getTeam({friendly_url: url}, (err, data) => {
      if(err) {
        return reject(err);
      }
      return resolve(data);
    });
});

module.exports = {
  list,
  fetch
}