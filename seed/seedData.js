const async = require('async');
const mongoose = require('mongoose');

const config = require('../config');
mongoose.connect(config.mongo_uri);

const {drivers} = require('./drivers');
const {teams} = require('./teams');
const Team = require('../api/teams/team.model');
const Driver = require('../api/drivers/driver.model');

const insertDrivers = callback => {
  Driver.collection.insert(drivers, callback);
}

const insertTeams = callback => {
  Team.collection.insert(teams, callback);
}

const migrate = () => {
  const tasks = [];

  tasks.push(insertDrivers);
  tasks.push(insertTeams);

  async.series(tasks, (err, resp) => {
    if(err) {
      console.log("Error", err);
    } else {
      console.log(resp);
    }
    process.exit(1);
  })
};