import { NextFunction, Request, Response } from "express";
import { AppError } from "../errors";
const ensureIsAdminMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  if (req.admin.admin === "false") {
    throw new AppError("Insufficient Permission", 403);
  }
  next();
};
export default ensureIsAdminMiddleware;
