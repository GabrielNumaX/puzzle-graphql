import jwt from 'jsonwebtoken';
import dotenv from 'dotenv'
import { resolve } from 'path';

dotenv.config();

export const jwtAuth = async (authToken:string) => {


    if(!authToken){

        throw new Error('Access Denied.');
    } 

    try {
        const decoded = jwt.verify(authToken, process.env.JWT_KEY || 's3cr3t');

        return decoded;
    }
    catch(ex) {
        throw ex;
    } 
}