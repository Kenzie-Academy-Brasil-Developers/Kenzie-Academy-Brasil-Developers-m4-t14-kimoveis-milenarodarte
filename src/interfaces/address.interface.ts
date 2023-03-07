import { z } from "zod";
import {
  AddressSchemaRequest,
  AddressSchemaResponse,
} from "../schemas/adress.schemas";

type IAdressRequest = z.infer<typeof AddressSchemaRequest>;
type IAddressResponse = z.infer<typeof AddressSchemaResponse>;

export { IAdressRequest, IAddressResponse };
