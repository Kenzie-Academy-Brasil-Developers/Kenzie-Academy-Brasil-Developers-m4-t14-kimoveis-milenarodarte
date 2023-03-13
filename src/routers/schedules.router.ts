import { Router } from "express";
import {
  createSchedulesController,
  listScheduleByRealEstateController,
} from "../controllers/scehedules.controllers";
import ensureDataIsValidMiddleware from "../middlewares/ensureDataIsValid.middleware";
import ensureIsAdminMiddleware from "../middlewares/ensureIsAdmin.middleware";
import ensureTokenIsValidMiddleware from "../middlewares/ensureTokenIsValid.middleware";
import { ScheduleSchemaRequest } from "../schemas/schedules.schemas";

const scheduleRoutes: Router = Router();

scheduleRoutes.post(
  "",
  ensureTokenIsValidMiddleware,
  ensureDataIsValidMiddleware(ScheduleSchemaRequest),

  createSchedulesController
);
scheduleRoutes.get(
  "/realEstate/:id",
  ensureTokenIsValidMiddleware,
  ensureIsAdminMiddleware,
  listScheduleByRealEstateController
);
export default scheduleRoutes;
