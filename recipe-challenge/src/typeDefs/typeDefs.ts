import { gql } from'apollo-server-express';

import { userDef } from './user'
import { recipeDef } from './recipe';
import { categoryDef } from './category'

const typeDefs = gql`
  
  type Query {
    _: String
  }
  type Mutation {
    _: String
  }
  type Subscription {
    _: String
  }
`;

export const allDefs = [typeDefs, userDef, recipeDef, categoryDef]