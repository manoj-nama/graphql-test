const express = require('express');
const exGraphQL = require('express-graphql');
const { buildSchema } = require('graphql');
const mongoose = require('mongoose');
const config = require('./config');

const PORT = process.env.PORT || 8888;

const schema = buildSchema(`
  type Query {
    hello: String!
  }
`);

const rootValue = {
  hello: () => 'Hello World!'
}

const app = express();

mongoose.connect(config.mongo_uri);

app.use('/graphql', exGraphQL({
  schema,
  rootValue,
  graphiql: true
}));

app.listen(PORT, () => {
  console.log(`
    Server listening on http://localhost:${PORT}/
    The GraphiQL interface is available on http://localhost:${PORT}/graphql
  `);
});