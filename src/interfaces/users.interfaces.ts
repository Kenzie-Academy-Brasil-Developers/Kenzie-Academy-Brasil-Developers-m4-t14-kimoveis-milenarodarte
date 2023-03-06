import {
  userRequestSchema,
  userResponseSchema,
  userUpdateSchema,
  multipleUsersResponse,
} from "../schemas/users.schemas";
import { z } from "zod";
import { DeepPartial } from "typeorm";

type IUserRequest = z.infer<typeof userRequestSchema>;
type IUserResponse = z.infer<typeof userResponseSchema>;
type IMultipleUsersResponse = z.infer<typeof multipleUsersResponse>;
type IUserUpdate = z.infer<typeof userUpdateSchema>;

export { IUserRequest, IUserResponse, IUserUpdate, IMultipleUsersResponse };
