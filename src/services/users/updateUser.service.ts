import { AppDataSource } from "../../data-source";
import { User } from "../../entities";
import { Repository } from "typeorm";
import { IUserResponse, IUserUpdate } from "../../interfaces/users.interfaces";
import { userResponseSchema } from "../../schemas/users.schemas";
import { AppError } from "../../errors";

const updateUserService = async (
  id: number,
  userData: IUserUpdate
): Promise<IUserResponse> => {
  const userDataKeys = Object.keys(userData);
  if (userDataKeys.length === 0) {
    throw new AppError(
      "one of those keys must be sent: [name, email, password]",
      400
    );
  }
  const userRepository: Repository<User> = AppDataSource.getRepository(User);
  const oldUserData = await userRepository.findOneBy({
    id: id,
  });
  const user = userRepository.create({
    ...oldUserData,
    ...userData,
  });
  await userRepository.save(user);
  const updatedUser = userResponseSchema.parse(user);

  return updatedUser;
};
export default updateUserService;
