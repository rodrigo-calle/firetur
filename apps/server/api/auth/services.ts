import AppDataSource from "../../db/index";
import { User, UserCreate } from "../../db/schemas/users";
import { User as UserEntity } from "../users/entities";

const authRepository = AppDataSource.getRepository(UserEntity);

export const register = async (data: UserCreate): Promise<User> => {
  const user = await authRepository.save(data);
  return user;
};
