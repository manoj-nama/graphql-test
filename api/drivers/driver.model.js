const mongoose = require('mongoose'),
  Schema = mongoose.Schema;

const DriverSchema = new Schema({
  name: String,
  badge: Number,
  country: String,
  podiums: Number,
  points: Number,
  races: Number,
  championships: Number,
  highest_finish: String,
  highest_grid: Number,
  dob: String,
  birth_place: String,
  picture: String,
  team: {
    type: Schema.Types.ObjectId,
    ref: 'Team'
  }
});

DriverSchema.index({ badge: 1 });

const DriverModel = mongoose.model('Driver', DriverSchema);
module.exports = DriverModel;