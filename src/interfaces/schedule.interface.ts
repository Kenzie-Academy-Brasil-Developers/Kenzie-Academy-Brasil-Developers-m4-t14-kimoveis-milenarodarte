import {
  MultipleScheduleSchemaResponse,
  ScheduleSchemaRequest,
  ScheduleSchemaResponse,
} from "../schemas/schedules.schemas";
import { ICategoriesResponse } from "./categories.interface";
import { IAddressResponse } from "./address.interface";
import { z } from "zod";

type IScheduleRequest = z.infer<typeof ScheduleSchemaRequest>;
type IscheduleResponse = z.infer<typeof ScheduleSchemaResponse>;
type IMultipleScheduleResponse = z.infer<typeof MultipleScheduleSchemaResponse>;

interface ISchemaResponseByRealEstate {
  id: number;
  sold: boolean;
  value: string | number;
  size: number;
  createdAt: string;
  updatedAt: string;
  category?: ICategoriesResponse | null;
  schedules: Array<{
    id: number;
    date: string;
    hour: string;
    user: {
      id: number;
      name: string;
      email: string;
      admin: boolean;
      password: string;
      createdAt: string;
      updatedAt: string;
      deletedAt?: string | null;
    };
  }>;
  address?: IAddressResponse | null;
}
type ResponseByRealEstate = ISchemaResponseByRealEstate | null;
export {
  IScheduleRequest,
  IscheduleResponse,
  IMultipleScheduleResponse,
  ResponseByRealEstate,
};
