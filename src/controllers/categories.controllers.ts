import listCategoriesService from "../services/categories/listCategories.services";
import { Request, Response } from "express";
import createCategoriesServices from "../services/categories/createCategories.services";
import listRealEstateByCategoryService from "../services/realEstate/listRealEstateByCategory.service";

const listCategoriesController = async (req: Request, res: Response) => {
  const data = await listCategoriesService();
  return res.status(200).json(data);
};

const createCategoriesController = async (req: Request, res: Response) => {
  const categoriesData = req.body;
  const newData = await createCategoriesServices(categoriesData);
  return res.status(201).json(newData);
};

const listCategoriesByRealEstateController = async (
  req: Request,
  res: Response
) => {
  const id = Number(req.params.id);
  const data = await listRealEstateByCategoryService(id);
  return res.status(200).json(data);
};

export {
  listCategoriesController,
  createCategoriesController,
  listCategoriesByRealEstateController,
};
