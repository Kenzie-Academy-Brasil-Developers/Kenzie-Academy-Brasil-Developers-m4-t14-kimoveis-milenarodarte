import { z } from "zod";
import { hashSync } from "bcryptjs";
const userRequestSchema = z.object({
  name: z.string().max(45).min(3),
  email: z.string().max(45).email(),
  admin: z.boolean().optional().default(false),
  password: z
    .string()
    .max(120)
    .transform((pass) => {
      return hashSync(pass, 10);
    }),
});
const userResponseSchema = userRequestSchema
  .extend({
    id: z.number(),
    createdAt: z.date(),
    updatedAt: z.date(),
    deletedAt: z.date().nullable(),
  })
  .omit({
    password: true,
  });
const multipleUsersResponse = userResponseSchema.array();
const userUpdateSchema = userRequestSchema.omit({ admin: true }).partial();
export {
  userRequestSchema,
  userResponseSchema,
  userUpdateSchema,
  multipleUsersResponse,
};
