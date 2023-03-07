import {
  categoriesSchemaRequest,
  categoriesSchemaResponse,
} from "../schemas/categories.schema";
import { z } from "zod";

type ICategoriesRequest = z.infer<typeof categoriesSchemaRequest>;
type ICategoriesResponse = z.infer<typeof categoriesSchemaResponse>;

export { ICategoriesRequest, ICategoriesResponse };
