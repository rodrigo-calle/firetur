import { DataSource } from "typeorm";
import { Place, PlaceImage } from "../api/places/entities";
import { Business } from "../api/business/entities";
import { Package } from "../api/packages/entities";

const AppDataSource = new DataSource({
  type: "mysql",
  host: "172.17.0.2",
  port: 3306,
  username: "root",
  password: "123456",
  database: "firetur_dev",
  entities: [Place, PlaceImage, Business, Package],
  synchronize: true,
  logging: false,
  charset: "utf8mb4",
});

export default AppDataSource;
