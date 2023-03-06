import { Request, Response } from "express";
import { IUserRequest } from "../interfaces/users.interfaces";
import createUserService from "../services/createUser.service";
import listUsersService from "../services/listUsers.service";

const createUserController = async (req: Request, res: Response) => {
  const userData: IUserRequest = req.body;
  const newData = await createUserService(userData);
  return res.status(201).json(newData);
};
const listUsersController = async (req: Request, res: Response) => {
  const query = req.query;

  const data = await listUsersService();
  return res.status(200).json(data);
};
export { createUserController, listUsersController };
