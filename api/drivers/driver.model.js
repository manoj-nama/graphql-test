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
    name: String,
    friendly_url: String,
    id: { type: Schema.Types.ObjectId, ref: 'Team' }
  }
});

DriverSchema.index({ badge: 1 }, { unique: true });
DriverSchema.index({ 'team.friendly_url': 1 });

const DriverModel = mongoose.model('Driver', DriverSchema);
module.exports = DriverModel;