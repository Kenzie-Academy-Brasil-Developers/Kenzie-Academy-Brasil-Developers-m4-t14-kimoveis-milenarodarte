import { AppDataSource } from "../../data-source";
import { User } from "../../entities";
import { Repository } from "typeorm";

const deleteUserService = async (id: number): Promise<void> => {
  const userRepository: Repository<User> = AppDataSource.getRepository(User);

  const oldUserData = await userRepository.findOne({
    where: {
      id: id,
    },
  });

  await userRepository.softRemove(oldUserData!);
};
export default deleteUserService;
