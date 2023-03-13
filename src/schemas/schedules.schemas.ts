import { z } from "zod";
import { realEstateSchemaResponse } from "./realEstate.schema";

const ScheduleSchemaRequest = z.object({
  date: z.string(),
  hour: z.string(),
  realEstateId: z.number().int(),
});

const ScheduleSchemaResponse = ScheduleSchemaRequest.extend({
  id: z.number(),
  userId: z.number().int(),
});

const MultipleScheduleSchemaResponse = ScheduleSchemaResponse.array();

const ScheduleByRealEstateSchemaResponse = realEstateSchemaResponse
  .omit({})
  .extend({
    schedule: ScheduleSchemaResponse.omit({
      realEstateId: true,
      userId: true,
    }).array(),
  });
export {
  ScheduleSchemaRequest,
  ScheduleSchemaResponse,
  MultipleScheduleSchemaResponse,
  ScheduleByRealEstateSchemaResponse,
};
