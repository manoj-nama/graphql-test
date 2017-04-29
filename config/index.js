const config = {
  mongo: {
    host: 'ds119568.mlab.com:19568/formula1',
    user: 'formula1',
    password: 'formulapassword'
  }
}

const mongo_uri = `mongodb://${config.mongo.user}:${config.mongo.password}@${config.mongo.host}`;

module.exports = {
  config,
  mongo_uri
};