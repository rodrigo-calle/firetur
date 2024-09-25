import express, { Request, Response } from "express";
import AppDataSource from "./db";
import { routes } from "./routers";

const app = express();
app.use(express.json());
const port = process.env.PORT || 8080;

app.listen(port, () => {
  try {
    routes(app);
    AppDataSource.initialize();
    console.log(`- Server listening at http://localhost:${port}`);
  } catch (error) {
    console.log(error);
  }
});

export default app;
