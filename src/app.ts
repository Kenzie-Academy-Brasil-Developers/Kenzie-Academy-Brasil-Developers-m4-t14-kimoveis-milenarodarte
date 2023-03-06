import "express-async-errors";
import express, { Application } from "express";
import { handleErrors } from "./errors";
import moviesRoutes from "./routers/users.router";

const app: Application = express();
app.use(express.json());

app.use("/users", moviesRoutes);
app.use(handleErrors);
export default app;
