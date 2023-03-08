import { Router } from "express";
import {
  createCategoriesController,
  listCategoriesController,
} from "../controllers/categories.controllers";
import ensureDataIsValidMiddleware from "../middlewares/ensureDataIsValid.middleware";
import ensureIsAdminMiddleware from "../middlewares/ensureIsAdmin.middleware";
import ensureTokenIsValidMiddleware from "../middlewares/ensureTokenIsValid.middleware";
import { categoriesSchemaRequest } from "../schemas/categories.schema";

const categorieRoutes: Router = Router();
categorieRoutes.get("", listCategoriesController);
categorieRoutes.post(
  "",
  ensureDataIsValidMiddleware(categoriesSchemaRequest),
  ensureTokenIsValidMiddleware,
  ensureIsAdminMiddleware,
  createCategoriesController
);

export default categorieRoutes;
