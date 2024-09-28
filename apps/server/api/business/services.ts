import { BusinessCreate } from "../../db/schemas/business";
import AppDataSource from "../../db/index";
import { Business as BusinessEntity } from "./entities";

const businessRepository = AppDataSource.getRepository(BusinessEntity);

export const createBusiness = async (data: BusinessCreate) => {
  const business = businessRepository.save(data);
  return business;
};

export const getBusinessById = async (
  id: number
): Promise<BusinessEntity | null> => {
  const business = await businessRepository.findOneBy({ id });
  return business;
};
