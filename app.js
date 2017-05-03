const express = require('express');
const { buildSchema } = require('graphql');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const { makeExecutableSchema } = require('graphql-tools');
const { graphiqlExpress, graphqlExpress } = require('graphql-server-express');

const config = require('./config');
const typeDefs = require('./graphql/schema');
const resolvers = require('./graphql/resolvers');

const PORT = process.env.PORT || 8888;

const schema = makeExecutableSchema({
  typeDefs,
  resolvers
});

const app = express();

mongoose.connect(config.mongo_uri);

app.use('/api', bodyParser.json(), graphqlExpress({ schema }));

app.use('/graphql', bodyParser.json(), graphiqlExpress({
  endpointURL: '/api',
}));

app.listen(PORT, () => {
  console.log(`
    Server listening on http://localhost:${PORT}/
    The GraphiQL interface is available on http://localhost:${PORT}/graphql
  `);
});