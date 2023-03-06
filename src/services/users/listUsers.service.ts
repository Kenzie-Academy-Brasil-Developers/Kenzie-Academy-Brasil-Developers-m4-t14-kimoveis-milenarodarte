import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { User } from "../../entities";
import { IMultipleUsersResponse } from "../../interfaces/users.interfaces";
import { multipleUsersResponse } from "../../schemas/users.schemas";

const listUsersService = async (): Promise<IMultipleUsersResponse> => {
  const usersRepository: Repository<User> = AppDataSource.getRepository(User);
  const users = await usersRepository.find();
  const allUsers = multipleUsersResponse.parse(users);

  return allUsers;
};
export default listUsersService;
