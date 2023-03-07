import { z } from "zod";

const ScheduleSchemaRequest = z.object({
  date: z.coerce.date(),
  hour: z.string().datetime(),
  realEstateId: z.number().int(),
});

const ScheduleSchemaResponse = ScheduleSchemaRequest.extend({
  id: z.number(),
  userId: z.number().int(),
});

export { ScheduleSchemaRequest, ScheduleSchemaResponse };
