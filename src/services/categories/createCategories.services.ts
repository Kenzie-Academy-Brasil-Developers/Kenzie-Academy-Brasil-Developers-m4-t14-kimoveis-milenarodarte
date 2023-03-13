import {
  ICategoriesRequest,
  ICategoriesResponse,
} from "../../interfaces/categories.interface";
import { Repository } from "typeorm";
import { Category } from "../../entities";
import { AppDataSource } from "../../data-source";
import { categoriesSchemaResponse } from "../../schemas/categories.schema";
import { AppError } from "../../errors";

const createCategoriesServices = async (
  categoryData: ICategoriesRequest
): Promise<ICategoriesResponse> => {
  const categoriesRepository: Repository<Category> =
    AppDataSource.getRepository(Category);

  const findName = await categoriesRepository.findOneBy({
    name: categoryData.name,
  });

  if (findName !== null) {
    throw new AppError("Category already exists", 409);
  }

  const category = categoriesRepository.create(categoryData);

  await categoriesRepository.save(category);

  const newCategory = categoriesSchemaResponse.parse(category);

  return newCategory;
};

export default createCategoriesServices;
