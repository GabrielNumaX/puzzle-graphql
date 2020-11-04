import { gql } from 'apollo-server-express';

export const categoryDef = gql`

    extend type Query {
        getCategories: [Category!]
        getOneCategory(id: ID!): Category
    }

    extend type Mutation {
        createCategory(input: createCategoryInput): Category
        updateCategory(id: ID!, input: updateCategoryInput): Category
        deleteCategory(id: ID!): Category
    }

    input createCategoryInput {
        id: ID!
        name: String!
    }

    input updateCategoryInput {
        name: String!
    }

    type Category {
        id: ID!
        name: String!
    }
`