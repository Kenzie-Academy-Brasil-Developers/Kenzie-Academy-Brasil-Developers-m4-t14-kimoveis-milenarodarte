import {
  IRealEstateRequest,
  IRealEstateResponse,
} from "../../interfaces/realEstate.interface";
import { Repository } from "typeorm";
import { Address, RealEstate } from "../../entities";
import { AppDataSource } from "../../data-source";
import {
  realEstateSchemaRequest,
  realEstateSchemaResponse,
} from "../../schemas/realEstate.schema";
import { AddressSchemaResponse } from "../../schemas/adress.schemas";
import { AppError } from "../../errors";
const createRealEstateService = async (
  realEstateData: IRealEstateRequest
): Promise<IRealEstateResponse> => {
  const realEstateRepository: Repository<RealEstate> =
    AppDataSource.getRepository(RealEstate);
  const adressRepository: Repository<Address> =
    AppDataSource.getRepository(Address);

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
      throw new AppError("address already exists", 409);
    } else {
      newAddress = addressVerification;
    }
  }

  let realEstate = realEstateRepository.create(realEstateData);
  // toda vez q passa pelo create ele volta sem todos os dados, o q faço?
  let newRealEstate = {
    ...realEstate,
    categoryId: realEstateData.categoryId, // problemna aqui pq n ta voltando nuber e se coloca number da erro
    addressId: Number(newAddress.id),
  };

  await realEstateRepository.save(newRealEstate);

  const returnRealEstate = realEstateSchemaResponse.parse(newRealEstate);

  return returnRealEstate;
};
export default createRealEstateService;
