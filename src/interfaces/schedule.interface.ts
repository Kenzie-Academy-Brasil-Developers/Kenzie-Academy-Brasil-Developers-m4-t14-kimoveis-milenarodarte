import {
  MultipleScheduleSchemaResponse,
  ScheduleByRealEstateSchemaResponse,
  ScheduleSchemaRequest,
  ScheduleSchemaResponse,
} from "../schemas/schedules.schemas";

import { z } from "zod";

type IScheduleRequest = z.infer<typeof ScheduleSchemaRequest>;
type IscheduleResponse = z.infer<typeof ScheduleSchemaResponse>;
type IMultipleScheduleResponse = z.infer<typeof MultipleScheduleSchemaResponse>;
type ISchemaResponseByRealEstate = z.infer<
  typeof ScheduleByRealEstateSchemaResponse
>;
export {
  IScheduleRequest,
  IscheduleResponse,
  IMultipleScheduleResponse,
  ISchemaResponseByRealEstate,
};
