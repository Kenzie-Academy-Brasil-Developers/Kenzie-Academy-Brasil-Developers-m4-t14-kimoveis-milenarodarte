import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { RealEstate } from "../../entities";
import { IMultipleRealEstateResponse } from "../../interfaces/realEstate.interface";
import { multipleRealEstateResponseSchema } from "../../schemas/realEstate.schema";

const listRealEstateService =
  async (): Promise<IMultipleRealEstateResponse> => {
    const realEstateRepository: Repository<RealEstate> =
      AppDataSource.getRepository(RealEstate);
    const realEstate = await realEstateRepository.find({
      order: {
        id: "ASC",
      },
    });
    const allRealEstate = multipleRealEstateResponseSchema.parse(realEstate);

    return allRealEstate;
  };
export default listRealEstateService;
