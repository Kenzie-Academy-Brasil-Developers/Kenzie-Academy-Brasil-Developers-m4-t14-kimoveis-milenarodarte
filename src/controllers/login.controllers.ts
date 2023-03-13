import { Request, Response } from "express";
import { ILoginRequest } from "../interfaces/login.interfaces";
import loginService from "../services/login/createLogin.services";
const loginController = async (req: Request, res: Response) => {
  const loginData: ILoginRequest = req.body;
  const login = await loginService(loginData);
  return res.status(200).json({ token: login });
};
export default loginController;
