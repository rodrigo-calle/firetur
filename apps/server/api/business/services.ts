import { BusinessCreate } from "../../db/schemas/business";
import AppDataSource from "../../db/index";
import { Business as BusinessEntity } from "./entities";
import { User as UserEntity } from "../users/entities";

const businessRepository = AppDataSource.getRepository(BusinessEntity);
const userRepository = AppDataSource.getRepository(UserEntity);
export const createBusiness = async (data: BusinessCreate) => {
  let users: UserEntity[] = [];

  if (data.users) {
    users = await userRepository.findByIds(data.users);
  }

  const business = businessRepository.save({
    ...data,
    users,
  });

  return business;
};

export const getBusinessById = async (
  id: number
): Promise<BusinessEntity | null> => {
  const business = await businessRepository.findOneBy({ id });
  return business;
};
