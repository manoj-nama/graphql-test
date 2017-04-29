const express = require('express');
const exGraphQL = require('express-graphql');
const { buildSchema } = require('graphql');
const mongoose = require('mongoose');

const config = require('./config');

const schema = buildSchema(`
  type Query {
    hello: String!
  }
`);

const rootValue = {
  hello: () => null//'Hello World!'
}

const app = express();

mongoose.connect(config.mongo_uri);

app.use('/', exGraphQL({
  schema,
  rootValue,
  graphiql: true
}));

app.listen(8888);