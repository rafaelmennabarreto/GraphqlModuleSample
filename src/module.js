const { GraphQLModule } = require('@graphql-modules/core');
const { loadSchemaFiles, loadResolversFiles } = require('graphql-toolkit');
const { resolve } = require('path');

const schemaPath = resolve(__dirname + '/schemas/');
const resolverPath = resolve(__dirname + '/resolvers/')

const UserModule = new GraphQLModule({
  typeDefs : loadSchemaFiles(schemaPath),
  resolvers : loadResolversFiles(resolverPath)
})

module.exports = UserModule;
