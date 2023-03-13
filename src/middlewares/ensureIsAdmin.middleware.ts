import { NextFunction, Request, Response } from "express";
import { Repository } from "typeorm";
import { AppDataSource } from "../data-source";
import { AppError } from "../errors";
import { User } from "../entities";
const ensureIsAdminMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const id = req.admin.id;
  const isAdmin = req.admin.admin;

  if (isAdmin === false) {
    throw new AppError("Insufficient permission", 403);
  }
  next();
};
export default ensureIsAdminMiddleware;
