import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { Category, RealEstate } from "../../entities";
import { AppError } from "../../errors";
import { IMultipleRealEstateResponse } from "../../interfaces/realEstate.interface";
import { multipleRealEstateResponseSchema } from "../../schemas/realEstate.schema";

const listRealEstateByCategoryService = async (id: number): Promise<any> => {
  const categoryRepository: Repository<Category> =
    AppDataSource.getRepository(Category);
  const realEstateRepository: Repository<RealEstate> =
    AppDataSource.getRepository(RealEstate);
  // tipar
  const category = await categoryRepository.findOne({
    where: {
      id: id,
    },
    relations: {
      realEstate: true,
    },
  });

  if (category === null) {
    throw new AppError("Category does not exists", 404);
  }
  console.log(category);

  //verificar se a categoria existe
  return category;
  // nao consigo filtra pela categoria Id, fica dandoi erro
  //const allcategory = multiplecategoryResponseSchema.parse(category);
};
export default listRealEstateByCategoryService;
