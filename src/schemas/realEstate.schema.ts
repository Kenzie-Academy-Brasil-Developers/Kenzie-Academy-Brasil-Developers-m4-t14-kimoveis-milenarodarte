import { z } from "zod";

const realEstateSchemaRequest = z.object({
  sold: z.boolean().default(false),
  value: z.number(),
  size: z.number().int(),
  categoryId: z.number().int().optional().nullable(),
  address: z.object({
    street: z.string().max(45),
    zipCode: z.string().max(8),
    number: z.string().max(7).nullable(),
    city: z.string().max(20),
    state: z.string().max(2),
  }),
});
const realEstateSchemaResponse = realEstateSchemaRequest
  .extend({
    id: z.number(),
    createdAt: z.date(),
    updatedAt: z.date(),
    addressId: z.number(),
  })
  .omit({
    address: true,
  });

const multipleRealEstateResponseSchema = realEstateSchemaResponse.array();
export {
  multipleRealEstateResponseSchema,
  realEstateSchemaRequest,
  realEstateSchemaResponse,
};
