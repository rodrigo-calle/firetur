import dotenv from "dotenv";
import { DataSourceOptions, EntitySchema, MixedList } from "typeorm";
import { validateEnvVariables } from "../../utils/dbEnvValidation";
import { Place } from "../../api/places/entities";
import { PlaceImage } from "../../api/places/entities";
import { Business } from "../../api/business/entities";
import { Package } from "../../api/packages/entities";
import { User } from "../../api/users/entities";

dotenv.config();

const validateEnvVariablesResult = validateEnvVariables(process.env);

if (!validateEnvVariablesResult) {
  throw new Error("DB variables are not defined");
}

const { type, host, port, username, password, database } =
  validateEnvVariablesResult;

const entitiesList:
  | MixedList<string | Function | EntitySchema<any>>
  | undefined = [Place, PlaceImage, Business, Package, User];

export const dbConfig = {
  type,
  host,
  port,
  username,
  password,
  database,
  entities: entitiesList,
  synchronize: true,
  logging: false,
  charset: "utf8mb4",
} as DataSourceOptions;
