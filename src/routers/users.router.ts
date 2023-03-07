import { Router } from "express";
import {
  createUserController,
  deleteUserController,
  listUsersController,
  updateUserController,
} from "../controllers/users.controllers";
import ensureDataIsValidMiddleware from "../middlewares/ensureDataIsValid.middleware";
import ensureTokenIsValidMiddleware from "../middlewares/ensureTokenIsValid.middleware";
import verifyEmailMiddleware from "../middlewares/verifyEmail.middleware";
import { userRequestSchema, userUpdateSchema } from "../schemas/users.schemas";
import ensureIsAdminMiddleware from "../middlewares/ensureIsAdmin.middleware";
import ensureIsAdminOrOwnerAccountMiddleware from "../middlewares/ensureIsAdminOrOwnerAccount.middleware";
import ensureUserExistsMiddleware from "../middlewares/ensureUserExists.middleware";
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
usersRoutes.patch(
  "/:id",
  ensureDataIsValidMiddleware(userUpdateSchema),
  ensureUserExistsMiddleware,
  ensureTokenIsValidMiddleware,
  ensureIsAdminOrOwnerAccountMiddleware,
  verifyEmailMiddleware,
  updateUserController
);
usersRoutes.delete(
  "/:id",
  ensureUserExistsMiddleware,
  ensureTokenIsValidMiddleware,
  ensureIsAdminMiddleware,
  deleteUserController
);

export default usersRoutes;
