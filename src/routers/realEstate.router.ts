import { Router } from "express";
import {
  createRealEstateController,
  listRealEstateController,
} from "../controllers/realEstate.controllers";
import ensureDataIsValidMiddleware from "../middlewares/ensureDataIsValid.middleware";
import ensureIsAdminMiddleware from "../middlewares/ensureIsAdmin.middleware";
import ensureTokenIsValidMiddleware from "../middlewares/ensureTokenIsValid.middleware";
import { realEstateSchemaRequest } from "../schemas/realEstate.schema";

const realEstateRoutes: Router = Router();
realEstateRoutes.post(
  "",
  ensureDataIsValidMiddleware(realEstateSchemaRequest),
  ensureTokenIsValidMiddleware,
  ensureIsAdminMiddleware,
  createRealEstateController
);
realEstateRoutes.get("", listRealEstateController);

export default realEstateRoutes;
