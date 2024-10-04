import AppDataSource from "../../db/index";
import { User, UserCreate } from "../../db/schemas/users";
import { User as UserEntity } from "../users/entities";
import { Business as BusinessEntity } from "../business/entities";

const authRepository = AppDataSource.getRepository(UserEntity);
const businessRepository = AppDataSource.getRepository(BusinessEntity);

export const register = async (data: UserCreate): Promise<User> => {
  let businesses: BusinessEntity[] = [];
  if (data.businesses) {
    businesses = await businessRepository.findByIds(data.businesses);
  }
  const user = await authRepository.save({
    ...data,
    businesses,
  });

  return user;
};
