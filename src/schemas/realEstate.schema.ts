import { z } from "zod";

const realEstateSchemaRequest = z.object({
  sold: z.boolean().default(false),
  value: z.string().or(z.number()),
  size: z.number().int().positive(),
  categoryId: z.number().int().optional().nullable(),
  address: z.object({
    street: z.string().max(45),
    zipCode: z.string().max(8),
    number: z.string().max(7).optional().nullable(),
    city: z.string().max(20),
    state: z.string().max(2),
  }),
});
const realEstateSchemaResponse = realEstateSchemaRequest
  .extend({
    id: z.number(),
    createdAt: z.string(),
    updatedAt: z.string(),
    addressId: z.number(),
  })
  .omit({
    address: true,
    categoryId: true,
    addressId: true,
  });

const multipleRealEstateResponseSchema = realEstateSchemaResponse.array();
export {
  multipleRealEstateResponseSchema,
  realEstateSchemaRequest,
  realEstateSchemaResponse,
};
