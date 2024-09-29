import { DataSourceOptions } from "typeorm";
export const validateEnvVariables = (
  dbEnv: NodeJS.ProcessEnv
): {
  type: string;
  host: string;
  port: number;
  username: string;
  password: string;
  database: string;
} | null => {
  if (
    !dbEnv.DB_TYPE ||
    !dbEnv.DB_HOST ||
    !dbEnv.DB_PORT ||
    !dbEnv.DB_USERNAME ||
    !dbEnv.DB_PASSWORD ||
    !dbEnv.DB_NAME
  ) {
    return null;
  }

  return {
    type: dbEnv.DB_TYPE,
    host: dbEnv.DB_HOST,
    port: Number(dbEnv.DB_PORT),
    username: dbEnv.DB_USERNAME,
    password: dbEnv.DB_PASSWORD,
    database: dbEnv.DB_NAME,
  };
};
