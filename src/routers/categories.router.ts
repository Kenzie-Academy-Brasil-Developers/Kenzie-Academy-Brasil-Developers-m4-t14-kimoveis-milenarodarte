import { Router } from "express";
import {
  createCategoriesController,
  listCategoriesByRealEstateController,
  listCategoriesController,
} from "../controllers/categories.controllers";
import { listRealEstateController } from "../controllers/realEstate.controllers";
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
categorieRoutes.get("/:id/realEstate", listCategoriesByRealEstateController);
export default categorieRoutes;
