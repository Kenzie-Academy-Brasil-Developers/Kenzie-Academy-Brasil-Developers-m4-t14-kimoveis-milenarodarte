import {
  categoriesSchemaRequest,
  categoriesSchemaResponse,
  multipleCategoriesResponse,
  realEstatebyCategorySchemaResponse,
} from "../schemas/categories.schema";
import { z } from "zod";

type ICategoriesRequest = z.infer<typeof categoriesSchemaRequest>;
type ICategoriesResponse = z.infer<typeof categoriesSchemaResponse>;
type IMultipleCategoriesResponse = z.infer<typeof multipleCategoriesResponse>;
type IRealEstateByCategoriesResponse = z.infer<
  typeof realEstatebyCategorySchemaResponse
>;
export {
  ICategoriesRequest,
  ICategoriesResponse,
  IMultipleCategoriesResponse,
  IRealEstateByCategoriesResponse,
};
