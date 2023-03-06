import { NextFunction, Request, Response } from "express";
import { AppError } from "../errors";
const ensureIsAdminOrOwnerAccountMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const idQuery = Number(req.params.id);
  const id = Number(req.admin.id);
  const isAdmin = req.admin.admin;
  if (isAdmin === false && idQuery !== id) {
    throw new AppError("Insufficient Permission", 403);
  }
  next();
};
export default ensureIsAdminOrOwnerAccountMiddleware;
