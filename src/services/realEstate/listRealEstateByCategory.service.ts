import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { Category } from "../../entities";
import { AppError } from "../../errors";
import { IRealEstateByCategoriesResponse } from "../../interfaces/categories.interface";

const listRealEstateByCategoryService = async (
  id: number
): Promise<IRealEstateByCategoriesResponse> => {
  const categoryRepository: Repository<Category> =
    AppDataSource.getRepository(Category);

  const category = await categoryRepository.findOne({
    where: {
      id: id,
    },
    relations: {
      realEstate: true,
    },
  });

  if (category === null) {
    throw new AppError("Category not found", 404);
  }

  return category;
};
export default listRealEstateByCategoryService;
