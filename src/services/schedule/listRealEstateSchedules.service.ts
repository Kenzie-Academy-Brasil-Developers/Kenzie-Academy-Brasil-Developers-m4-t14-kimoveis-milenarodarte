import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { RealEstate } from "../../entities";
import { AppError } from "../../errors";
import { ISchemaResponseByRealEstate } from "../../interfaces/schedule.interface";
const listSchedulesByRealEstateService = async (
  id: number
): Promise<ISchemaResponseByRealEstate> => {
  const RealEstateRepository: Repository<RealEstate> =
    AppDataSource.getRepository(RealEstate);

  const realEstate = await RealEstateRepository.findOne({
    where: {
      id: id,
    },
    relations: {
      schedule: true,
    },
  });

  if (realEstate === null) {
    throw new AppError("RealEstate not found", 404);
  }

  return realEstate;
};
export default listSchedulesByRealEstateService;
