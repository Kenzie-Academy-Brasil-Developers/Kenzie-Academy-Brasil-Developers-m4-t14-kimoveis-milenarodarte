import { NextFunction, Request, Response } from "express";
import { AppError } from "../errors";
import { User } from "../entities";
import { Repository } from "typeorm";
import { AppDataSource } from "../data-source";

const ensureUserExistsMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const userRepository: Repository<User> = AppDataSource.getRepository(User);

  const findUser = await userRepository.findOne({
    where: {
      id: parseInt(req.params.id),
    },
  });
  if (findUser === null || findUser.deletedAt !== null) {
    throw new AppError("User not found", 404);
  }

  next();
};
export default ensureUserExistsMiddleware;
