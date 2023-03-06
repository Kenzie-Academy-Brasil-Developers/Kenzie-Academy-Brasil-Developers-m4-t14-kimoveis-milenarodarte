import { Request, Response } from "express";
import { ILoginRequest } from "../interfaces/login.interfaces";
import loginService from "../services/login/login.services";
const loginController = async (req: Request, res: Response) => {
  const loginData: ILoginRequest = req.body;
  const login = await loginService(loginData);
  return res.status(200).json(login);
};
export default loginController;
