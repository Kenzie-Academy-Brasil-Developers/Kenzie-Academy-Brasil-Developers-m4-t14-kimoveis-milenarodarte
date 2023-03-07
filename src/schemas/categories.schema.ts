import { z } from "zod";

const categoriesSchemaRequest = z.object({
  name: z.string().max(45),
});
const categoriesSchemaResponse = categoriesSchemaRequest.extend({
  id: z.number().int(),
});
export { categoriesSchemaRequest, categoriesSchemaResponse };
