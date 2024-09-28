import AppDataSource from "../../db";
import { Package, PackageCreate } from "../../db/schemas/packages";
import { Package as PackageEntity } from "./entities";

const packageRepository = AppDataSource.getRepository(PackageEntity);

export const createPackage = async (data: PackageCreate): Promise<Package> => {
  const touristicPackage = packageRepository.save(data);
  return touristicPackage;
};

export const getPackageById = async (id: number): Promise<Package | null> => {
  const touristicPackage = await packageRepository.findOneBy({ id });
  console.log({ touristicPackage: touristicPackage?.business });
  return touristicPackage;
};
