import { Request, Response } from "express";
import { IUserRequest, IUserUpdate } from "../interfaces/users.interfaces";
import createUserService from "../services/users/createUser.service";
import deleteUserService from "../services/users/deleteUser.service";
import listUsersService from "../services/users/listUsers.service";
import updateUserService from "../services/users/updateUser.service";

const createUserController = async (req: Request, res: Response) => {
  const userData: IUserRequest = req.body;
  const newData = await createUserService(userData);
  return res.status(201).json(newData);
};
const listUsersController = async (req: Request, res: Response) => {
  const data = await listUsersService();
  return res.status(200).json(data);
};
const updateUserController = async (req: Request, res: Response) => {
  const updateData: IUserUpdate = req.body;
  const data = await updateUserService(Number(req.params.id), updateData);
  return res.status(200).json(data);
};
const deleteUserController = async (req: Request, res: Response) => {
  await deleteUserService(Number(req.params.id));
  return res.status(204).json();
};
export {
  createUserController,
  listUsersController,
  updateUserController,
  deleteUserController,
};
