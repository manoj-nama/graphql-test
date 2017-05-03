const mongoose = require('mongoose'),
  Schema = mongoose.Schema;

const TeamSchema = new Schema({
  friendly_url: { type: String, unique: true },
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
  technical_chief: String,
  drivers: [
    { type: Schema.Types.ObjectId, ref: 'Driver' }
  ]
});

TeamSchema.index({ friendly_url: 1 }, { unique: true });

const TeamModel = mongoose.model('Team', TeamSchema);
module.exports = TeamModel;