import { z } from "zod";
import { realEstateSchemaResponse } from "./realEstate.schema";

const categoriesSchemaRequest = z.object({
  name: z.string().max(45),
});
const categoriesSchemaResponse = categoriesSchemaRequest.extend({
  id: z.number().int(),
});
const multipleCategoriesResponse = categoriesSchemaResponse.array();

const realEstatebyCategorySchemaResponse = categoriesSchemaResponse.extend({
  realEstate: realEstateSchemaResponse.omit({}).array(),
});
export {
  categoriesSchemaRequest,
  categoriesSchemaResponse,
  multipleCategoriesResponse,
  realEstatebyCategorySchemaResponse,
};
