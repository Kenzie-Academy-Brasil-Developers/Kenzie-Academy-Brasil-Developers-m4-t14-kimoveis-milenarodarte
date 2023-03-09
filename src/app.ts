import "express-async-errors";
import express, { Application } from "express";
import { handleErrors } from "./errors";
import usersRoutes from "./routers/users.router";
import loginRoutes from "./routers/login.router";
import categoriesRoutes from "./routers/categories.router";
import realEstateRoutes from "./routers/realEstate.router";
import scheduleRoutes from "./routers/schedules.router";

const app: Application = express();
app.use(express.json());

app.use("/users", usersRoutes);
app.use("/login", loginRoutes);
app.use("/categories", categoriesRoutes);
app.use("/realEstate", realEstateRoutes);
app.use("/schedules", scheduleRoutes);
app.use(handleErrors);
export default app;
