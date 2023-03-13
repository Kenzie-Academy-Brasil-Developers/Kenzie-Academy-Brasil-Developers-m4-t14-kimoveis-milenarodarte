import { ILoginRequest } from "../../interfaces/login.interfaces";
import "dotenv/config";
import { Repository } from "typeorm";
import { User } from "../../entities";
import { AppDataSource } from "../../data-source";
import { AppError } from "../../errors";

import { compare } from "bcryptjs";
import jwt from "jsonwebtoken";

const loginService = async (loginData: ILoginRequest): Promise<string> => {
  const usersRepository: Repository<User> = AppDataSource.getRepository(User);
  const login = await usersRepository.findOne({
    where: {
      email: loginData.email,
    },
  });
  console.log("loginData: ", loginData, "login", login);

  if (login === null) {
    throw new AppError("Invalid credentials", 401);
  }
  const matchPassword: boolean = await compare(
    login.password,
    loginData.password
  );

  if (!matchPassword) {
    throw new AppError("Invalid credentials", 401);
  }

  if (login.deletedAt !== null) {
    throw new AppError("Invalid credentials", 401);
  }
  const token: string = jwt.sign(
    {
      admin: login.admin.toString(),
    },
    process.env.SECRET_KEY!,
    {
      expiresIn: "24h",
      subject: login.id.toString(),
    }
  );

  return token;
};
export default loginService;
