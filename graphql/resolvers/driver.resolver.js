const DriverService = require('../../api/drivers/driver.service');

const list = ({friendly_url} = {}, params, c, i) => {
  // console.log("PARAMS", params);
  // console.log("CONTEXT", c);
  // console.log("INFO", i);
  return new Promise((resolve, reject) => {
    const opts = {};
    if (friendly_url) {
      opts.team_friendly_url = friendly_url;
    }
    DriverService.list(opts, params, (err, data) => {
      if (err) {
        return reject(err);
      }
      return resolve(data);
    });
  });
}

const fetch = (root, params) => new Promise((resolve, reject) => {
  let query = {}
  if (params) {
    query['badge'] = params.badge;
  }
  DriverService
    .getDriver(query, (err, data) => {
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