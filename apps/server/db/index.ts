import { DataSource } from "typeorm";
import { dbConfig } from "./config/config";

const AppDataSource = new DataSource(dbConfig);

export default AppDataSource;
