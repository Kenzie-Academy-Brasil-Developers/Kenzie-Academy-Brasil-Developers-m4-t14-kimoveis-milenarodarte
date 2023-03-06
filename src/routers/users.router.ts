import { Router } from "express";
import {
  createUserController,
  listUsersController,
} from "../controllers/users.controllers";
import ensureDataIsValidMiddleware from "../middlewares/ensureDataIsValid.middleware";
import ensureTokenIsValidMiddleware from "../middlewares/ensureTokenIsValid.middleware";
import verifyEmailMiddleware from "../middlewares/verifyEmail.middleware";
import { userRequestSchema } from "../schemas/users.schemas";
import ensureIsAdminMiddleware from "../middlewares/ensureIsAdmin.middleware";
const usersRoutes: Router = Router();

usersRoutes.post(
  "",
  ensureDataIsValidMiddleware(userRequestSchema),
  verifyEmailMiddleware,
  createUserController
);
usersRoutes.get(
  "",
  ensureTokenIsValidMiddleware,
  ensureIsAdminMiddleware,
  listUsersController
);

export default usersRoutes;
