import { Request, Response, NextFunction } from "express";
import { Repository } from "typeorm";
import { AppDataSource } from "../data-source";
import { User } from "../entities";
import { AppError } from "../errors";

const verifyEmailMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const userRepository: Repository<User> = AppDataSource.getRepository(User);

  if (!req.body.email) {
    return next();
  }

  const findEmail = await userRepository.findOne({
    where: {
      email: req.body.email,
    },
  });
  if (findEmail !== null) {
    throw new AppError("Email already exists", 409);
  }
  next();
};
export default verifyEmailMiddleware;
