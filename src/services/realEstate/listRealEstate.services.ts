import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { RealEstate } from "../../entities";
import { IMultipleRealEstateResponse } from "../../interfaces/realEstate.interface";

const listRealEstateService =
  async (): Promise<IMultipleRealEstateResponse> => {
    const realEstateRepository: Repository<RealEstate> =
      AppDataSource.getRepository(RealEstate);
    const realEstate = await realEstateRepository.find({
      relations: {
        address: true,
      },
    });

    return realEstate;
  };
export default listRealEstateService;
