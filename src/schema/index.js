const { schemaComposer } = require("graphql-compose");

require("../models/AdminPermissionRole");

const {
  Query: AdminUserQuery,
  Mutation: AdminUserMutation,
} = require("./AdminUser");

const { Query: UserQuery, Mutation: UserMutation } = require("./User");

const {
  Query: PermissionRoleQuery,
  Mutation: PermissionRoleMutation,
} = require("./PermissionRole");

const {
  Query: PermissionQuery,
  Mutation: PermissionMutation,
} = require("./Permission");

const {
  Query: TaskMessageQuery,
  Mutation: TaskMessageMutation,
} = require("./TaskMessage");

//added categrories schema
const {
  Query: CategoryQuery,
  Mutation: CategoryMutation,
} = require("./Category");


const { Query: TaskQuery, Mutation: TaskMutation } = require("./Task");

const { Mutation: PageMutation, Query: PageQuery } = require("./Page");

//added Category query
schemaComposer.Query.addFields({
  ...UserQuery,
  ...PermissionRoleQuery,
  ...PermissionQuery,
  ...AdminUserQuery,
  ...TaskQuery,
  ...TaskMessageQuery,
  ...CategoryQuery,
  ...PageQuery,
});

//added Category mutation
schemaComposer.Mutation.addFields({
  ...UserMutation,
  ...PermissionRoleMutation,
  ...PermissionMutation,
  ...AdminUserMutation,
  ...TaskMutation,
  ...TaskMessageMutation,
  ...CategoryMutation,
  ...PageMutation,
});

module.exports = schemaComposer.buildSchema();
