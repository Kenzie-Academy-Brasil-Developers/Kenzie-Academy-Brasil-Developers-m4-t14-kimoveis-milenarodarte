import "express-async-errors";
import express, { Application } from "express";
import { handleErrors } from "./errors";
import usersRoutes from "./routers/users.router";

const app: Application = express();
app.use(express.json());

app.use("/users", usersRoutes);
app.use(handleErrors);
export default app;
