import { z } from "zod";

const userRequestSchema = z.object({
  name: z.string().max(45).min(3),
  email: z.string().max(45).email(),
  admin: z.boolean().optional().default(false),
  password: z.string().max(120),
});
const userResponseSchema = userRequestSchema
  .extend({
    id: z.number(),
    createdAt: z.string(),
    updatedAt: z.string(),
    deletedAt: z.string().nullable(),
  })
  .omit({
    password: true,
  });
const multipleUsersResponse = userResponseSchema.array();
const userUpdateSchema = z
  .object({
    name: z.string().max(45).min(3),
    email: z.string().max(45).email(),
    password: z.string().max(120),
  })
  .partial();
export {
  userRequestSchema,
  userResponseSchema,
  userUpdateSchema,
  multipleUsersResponse,
};
