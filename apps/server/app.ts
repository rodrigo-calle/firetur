import express from "express";
import AppDataSource from "./db";
import { routes } from "./routers";
import dotenv from "dotenv";

dotenv.config({
  path: "./.env",
});
const app = express();
app.use(express.json());
const port = process.env.PORT || 8080;

app.listen(port, () => {
  try {
    AppDataSource.initialize();
    routes(app);
    console.log(`- Server listening at http://localhost:${port}`);
  } catch (error) {
    console.log(error);
  }
});

export default app;
