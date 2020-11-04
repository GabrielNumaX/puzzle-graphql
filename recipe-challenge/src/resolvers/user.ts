import * as bcrypt from 'bcrypt';
import * as jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import { getConnection } from "typeorm";
import UserModel from '../database/models/user';

dotenv.config();

export const userResolver = {

    Mutation: {
        signup: async (_: any, args: { input: any }): Promise<any> => {

            const checkEmail = await getConnection()
                .createQueryBuilder()
                .select('user')
                .from(UserModel, 'user')
                .where('user.email = :email', {email: args.input.email})
                .getOne()

            if(checkEmail) {

               throw new Error('Email already registered')
            }

            const hashedPassword = await bcrypt.hash(args.input.password, 10);

            let newUser = new UserModel();
            
            newUser.name = args.input.name;
            newUser.email = args.input.email;
            newUser.password = hashedPassword;

            let userRepo = getConnection().getRepository(UserModel);

            const user = await userRepo.save(newUser);

            console.log(user);

            return user;
        },

        login: async (_: any, args: { input: any }): Promise<any> => {

            const userCheck = await getConnection()
                .createQueryBuilder()
                .select('user')
                .from(UserModel, 'user')
                .where('user.email = :email', {email: args.input.email})
                .getOne()

            if(!userCheck) {

                throw new Error('User or Password Incorrect')
            }

            const passwordCompare = await bcrypt.compare(args.input.password, userCheck.password)

            if(!passwordCompare) {

                throw new Error('User or Password Incorrect');
            }

            const secret = process.env.JWT_KEY || 's3cr3t';
            

            const token = jwt.sign({ id: userCheck.id }, secret);
            return { token };
        }

    }

}

