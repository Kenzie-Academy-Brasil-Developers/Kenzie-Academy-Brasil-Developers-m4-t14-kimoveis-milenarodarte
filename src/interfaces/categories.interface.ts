import {
  categoriesSchemaRequest,
  categoriesSchemaResponse,
  multipleCategoriesResponse,
} from "../schemas/categories.schema";
import { z } from "zod";

type ICategoriesRequest = z.infer<typeof categoriesSchemaRequest>;
type ICategoriesResponse = z.infer<typeof categoriesSchemaResponse>;
type IMultipleCategoriesResponse = z.infer<typeof multipleCategoriesResponse>;

export { ICategoriesRequest, ICategoriesResponse, IMultipleCategoriesResponse };
