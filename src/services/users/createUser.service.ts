import { IUserRequest, IUserResponse } from "../../interfaces/users.interfaces";
import { Repository } from "typeorm";
import { User } from "../../entities";
import { AppDataSource } from "../../data-source";
import { userResponseSchema } from "../../schemas/users.schemas";
const createUserService = async (
  userData: IUserRequest
): Promise<IUserResponse> => {
  const usersRepository: Repository<User> = AppDataSource.getRepository(User);

  const user = usersRepository.create(userData);

  await usersRepository.save(user);

  const newUser = userResponseSchema.parse(user);

  return newUser;
};
export default createUserService;
