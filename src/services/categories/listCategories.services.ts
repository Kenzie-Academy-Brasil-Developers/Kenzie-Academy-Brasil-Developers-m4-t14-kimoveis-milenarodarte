import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { Category } from "../../entities";
import { IMultipleCategoriesResponse } from "../../interfaces/categories.interface";
import { multipleCategoriesResponse } from "../../schemas/categories.schema";

const listCategoriesService =
  async (): Promise<IMultipleCategoriesResponse> => {
    const categoriesRepository: Repository<Category> =
      AppDataSource.getRepository(Category);
    const categories = await categoriesRepository.find({
      order: {
        id: "ASC",
      },
    });
    const allCategories = multipleCategoriesResponse.parse(categories);

    return allCategories;
  };
export default listCategoriesService;
