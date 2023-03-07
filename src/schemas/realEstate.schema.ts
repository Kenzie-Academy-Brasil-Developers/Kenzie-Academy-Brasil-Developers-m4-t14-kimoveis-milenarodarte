import { z } from "zod";

const realEstateSchemaRequest = z.object({
  sold: z.boolean().nullable().default(false),
  value: z.number(),
  size: z.number().int(),
  addressId: z.number().int(),
  categoryId: z.number().int(),
});
const realEstateSchemaResponse = realEstateSchemaRequest.extend({
  id: z.number(),
  createdAt: z.string().datetime(),
  updatedAt: z.string().datetime(),
});
export { realEstateSchemaRequest, realEstateSchemaResponse };
