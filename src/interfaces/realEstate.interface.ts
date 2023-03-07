import {
  realEstateSchemaRequest,
  realEstateSchemaResponse,
} from "../schemas/realEstate.schema";
import { z } from "zod";

type IRealEstateRequest = z.infer<typeof realEstateSchemaRequest>;
type IRealEstateResponse = z.infer<typeof realEstateSchemaResponse>;

export { IRealEstateRequest, IRealEstateResponse };
