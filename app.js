const express = require('express');
const expressQL = require('express-graphql');
const { buildSchema } = require('graphql');

const schema = buildSchema(`
  type Query {
    hello: String!
  }
`);

const rootValue = {
  hello: () => null//'Hello World!'
}

const app = express();

app.use('/', expressQL({
  schema,
  rootValue,
  graphiql: true
}));

app.listen(8888);