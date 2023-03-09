import {
  multipleRealEstateResponseSchema,
  realEstateSchemaRequest,
  realEstateSchemaResponse,
} from "../schemas/realEstate.schema";
import { z } from "zod";

type IRealEstateRequest = z.infer<typeof realEstateSchemaRequest>;
type IRealEstateResponse = z.infer<typeof realEstateSchemaResponse>;
type IMultipleRealEstateResponse = z.infer<
  typeof multipleRealEstateResponseSchema
>;
export { IRealEstateRequest, IRealEstateResponse, IMultipleRealEstateResponse };
