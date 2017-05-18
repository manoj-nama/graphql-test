const TeamService = require('../../api/teams/team.service');

const list = (args, req, next, y) => {
  return new Promise((resolve, reject) => {
    TeamService.list({}, (err, data) => {
      if (err) {
        return reject(err);
      }
      return resolve(data);
    });
  });
}

const fetch = (args, { friendly_url }) => new Promise((resolve, reject) => {
  const url = (args && args.team_friendly_url) || friendly_url;
  TeamService
    .getTeam({ friendly_url: url }, (err, data) => {
      if (err) {
        return reject(err);
      }
      return resolve(data);
    });
});

module.exports = {
  list,
  fetch
}