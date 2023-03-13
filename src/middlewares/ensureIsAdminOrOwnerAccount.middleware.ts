import { NextFunction, Request, Response } from "express";
import { Repository } from "typeorm";
import { AppDataSource } from "../data-source";
import { User } from "../entities";
import { AppError } from "../errors";
const ensureIsAdminOrOwnerAccountMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const idQuery = Number(req.params.id);
  const id = Number(req.admin.id);

  const userRepository: Repository<User> = AppDataSource.getRepository(User);
  const user = await userRepository.findOne({
    where: {
      id: id,
    },
  });

  if (user!.admin === false && idQuery !== id) {
    throw new AppError("Insufficient permission", 403);
  }

  next();
};
export default ensureIsAdminOrOwnerAccountMiddleware;
