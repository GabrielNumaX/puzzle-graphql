import { combineResolvers } from 'graphql-resolvers';
import { getConnection, getRepository} from "typeorm";
import { isAuthenticated } from '../middleware/isAuthenticated';
import UserModel from '../database/models/user';
import RecipeModel from '../database/models/recipe';

export const recipeResolver = {
    
    Mutation: {
        createRecipe:  combineResolvers(isAuthenticated, async (_: any, args: { input: any }, ctx: {id:any} ): Promise<any> => {
        // createRecipe:  async (_: any, args: { input: any }, ctx: {id:any} ): Promise<any> => {
        
            console.log('create recipe');   

            const connection = getConnection();

            // const userRepo = getRepository(UserModel);
            // const user = await userRepo.findOne({id: ctx.id}, {relations: ['recipes']});

            let newRecipe = new RecipeModel();

            newRecipe.name = args.input.name;
            newRecipe.description = args.input.description;
            newRecipe.ingredients = args.input.ingredients;
            // newRecipe.category = args.input.category;
            newRecipe.user = ctx.id;

            // user?.recipes.push(newRecipe);

            await connection.manager.save(newRecipe);

            return  newRecipe;
        }
        )
    }
}