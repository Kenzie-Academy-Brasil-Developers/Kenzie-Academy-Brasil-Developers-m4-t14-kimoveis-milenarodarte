import {
  ScheduleSchemaRequest,
  ScheduleSchemaResponse,
} from "../schemas/schedules.schemas";
import { z } from "zod";

type IScheduleRequest = z.infer<typeof ScheduleSchemaRequest>;
type IscheduleResponse = z.infer<typeof ScheduleSchemaResponse>;

export { IScheduleRequest, IscheduleResponse };
