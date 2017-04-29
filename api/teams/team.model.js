const mongoose = require('mongoose'),
  Schema = mongoose.Schema;

const TeamSchema = new Schema({
  name: String,
  base: String,
  chassis: String,
  engine: String,
  first_entry: String,
  championships: Number,
  highest_finish: String,
  podiums: Number,
  poles: Number,
  fastest_laps: Number,
  team_chief: String,
  picture: String,
  technical_chief: String
});

const TeamModel = mongoose.model('Team', TeamSchema);
module.exports = TeamModel;