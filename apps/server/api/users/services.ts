import AppDataSource from "../../db/index";
import { User, UserRoles } from "../../db/schemas/users";
import { User as UserEntity } from "./entities";

const userRepository = AppDataSource.getRepository(UserEntity);

export const getUserByEmail = async (email: string): Promise<User | null> => {
  const user = await userRepository.findOneBy({ email });
  if (!user) return null;
  // TODO: unify role types
  return {
    ...user,
    role: user?.role as UserRoles,
  };
};
