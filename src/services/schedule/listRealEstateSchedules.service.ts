import { Repository } from "typeorm";

import { AppDataSource } from "../../data-source";
import { RealEstate } from "../../entities";
import { AppError } from "../../errors";

import { ResponseByRealEstate } from "../../interfaces/schedule.interface";
const listSchedulesByRealEstateService = async (
  id: number
): Promise<ResponseByRealEstate> => {
  const RealEstateRepository: Repository<RealEstate> =
    AppDataSource.getRepository(RealEstate);

  const realEstate = await RealEstateRepository.findOne({
    where: {
      id: id,
    },
  });
  if (realEstate === null) {
    throw new AppError("RealEstate not found", 404);
  }
  const listRealEstate: RealEstate | null =
    await RealEstateRepository.createQueryBuilder("real_estate")
      .select([
        "real_estate",
        "real_estate_category",
        "schedules_users_properties",
        "schedules_users_properties_user",
        "real_estate_address",
      ])
      .innerJoin("real_estate.category", "real_estate_category")
      .innerJoin("real_estate.schedules", "schedules_users_properties")
      .innerJoin(
        "schedules_users_properties.user",
        "schedules_users_properties_user"
      )
      .innerJoin("real_estate.address", "real_estate_address")
      .where("real_estate.id = :id", { id: id })
      .getOne();

  return listRealEstate;
};
export default listSchedulesByRealEstateService;
