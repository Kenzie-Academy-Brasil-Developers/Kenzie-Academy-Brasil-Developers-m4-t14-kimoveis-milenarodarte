import {
  IRealEstateRequest,
  IRealEstateResponse,
} from "../../interfaces/realEstate.interface";
import { Repository } from "typeorm";
import { Address, Category, RealEstate } from "../../entities";
import { AppDataSource } from "../../data-source";
import { realEstateSchemaRequest } from "../../schemas/realEstate.schema";
import { AddressSchemaResponse } from "../../schemas/adress.schemas";
import { AppError } from "../../errors";

const createRealEstateService = async (
  realEstateData: IRealEstateRequest
): Promise<IRealEstateResponse> => {
  const realEstateRepository: Repository<RealEstate> =
    AppDataSource.getRepository(RealEstate);
  const adressRepository: Repository<Address> =
    AppDataSource.getRepository(Address);
  const categoryRepository: Repository<Category> =
    AppDataSource.getRepository(Category);
  realEstateSchemaRequest.parse(realEstateData);

  const addressVerification = await adressRepository.findOne({
    where: {
      street: realEstateData.address.street,
      zipCode: realEstateData.address.zipCode,
      number: realEstateData.address.number || "",
      city: realEstateData.address.city,
      state: realEstateData.address.state,
    },
  });

  let address;
  let newAddress;

  if (addressVerification === null) {
    address = adressRepository.create(realEstateData.address);
    await adressRepository.save(address);
    newAddress = AddressSchemaResponse.parse(address);
  } else {
    const verifyIfAdressIsBeingUsed = await realEstateRepository.findOneBy({
      id: addressVerification.id,
    });

    if (verifyIfAdressIsBeingUsed !== null) {
      throw new AppError("Address already exists", 409);
    } else {
      newAddress = addressVerification;
    }
  }
  let category;
  if (realEstateData.categoryId) {
    category = await categoryRepository.findOneBy({
      id: Number(realEstateData.categoryId),
    });
  } else {
    category = null;
  }

  const realEstate = realEstateRepository.create({
    ...realEstateData,
    category: category,
    address: newAddress,
  });

  await realEstateRepository.save(realEstate);

  return realEstate;
};
export default createRealEstateService;
