import { Router } from "express";
import { createSchedulesController } from "../controllers/scehedules.controllers";
import ensureDataIsValidMiddleware from "../middlewares/ensureDataIsValid.middleware";
import ensureTokenIsValidMiddleware from "../middlewares/ensureTokenIsValid.middleware";
import { ScheduleSchemaRequest } from "../schemas/schedules.schemas";

const scheduleRoutes: Router = Router();

scheduleRoutes.post(
  "",
  ensureDataIsValidMiddleware(ScheduleSchemaRequest),
  ensureTokenIsValidMiddleware,
  createSchedulesController
);
export default scheduleRoutes;
