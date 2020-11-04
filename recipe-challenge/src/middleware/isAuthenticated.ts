import { skip } from 'graphql-resolvers';

export const isAuthenticated = (_: any, __:any , ctx: { id: any }) => {
  if (!ctx.id) {
    throw new Error('Access Denied! Please login to continue');
  }
  return skip;
}