import { Router } from "express";
import {
  createUserController,
  listUsersController,
} from "../controllers/users.controllers";
import ensureDataIsValidMiddleware from "../middlewares/ensureDataIsValid.middleware";
import verifyEmailMiddleware from "../middlewares/verifyEmail.middleware";
import { userRequestSchema } from "../schemas/users.schemas";
const usersRoutes: Router = Router();

usersRoutes.post(
  "",
  ensureDataIsValidMiddleware(userRequestSchema),
  verifyEmailMiddleware,
  createUserController
);
usersRoutes.get("", listUsersController);

export default usersRoutes;
