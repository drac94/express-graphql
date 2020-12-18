import isTokenValid from '../../auth/validate';
import { get, getAll, create } from '../../core/user';
import { User } from '../../data/models/user';
import { UserInput } from '../../types';

const getUser = async (args: { id: number }, context: any): Promise<User | undefined> => {
  const { token } = await context();
  const { error } = await isTokenValid(token);
  if (error) {
    throw new Error(error.message);
  }
  return get(args.id);
};

const getUsers = async (_: Record<string, never>, context: any): Promise<User[]> => {
  const { token } = await context();
  const { error } = await isTokenValid(token);
  if (error) {
    throw new Error(error.message);
  }
  return getAll();
};

const createUser = async (args: UserInput, context: any): Promise<User> => {
  const { token } = await context();
  const { error } = await isTokenValid(token);
  if (error) {
    throw new Error(error.message);
  }
  return create(args);
};

export { getUser, getUsers, createUser };
