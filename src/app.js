const { GraphQLServer } = require('graphql-yoga');
const UserModule = require('./module');

const server = new GraphQLServer(UserModule);
server.start()

