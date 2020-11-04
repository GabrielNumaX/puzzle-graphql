import { gql } from 'apollo-server-express';

export const recipeDef = gql`

    extend type Query {
        getRecipes: [Recipe!]
        getOneRecipe(id: ID!): Recipe
        getMyRecipes(id: ID!): [Recipe]
    }

    extend type Query {
        recipe: ID!
        name: String!
        description: String!
        ingredients: String!
        category: Category
    }

    extend type Mutation {
        createRecipe(input: createRecipeInput!): Recipe
        updateRecipe(id: ID!, input: updateRecipeInput): Recipe
        deleteRecipe(id: ID!): Recipe
    }

    input createRecipeInput {
        name: String!
        description: String!
        ingredients: String!
        category: Int
    }

    input updateRecipeInput {
        name: String!
        description: String!
        ingredients: String!
        category: String!
    }

    type Recipe {
        id: ID
        name: String!
        description: String!
        ingredients: String!
        category: Category
    }
`;