import listCategoriesService from "../services/categories/listCategories.services";
import { Request, Response } from "express";
import createCategoriesServices from "../services/categories/createCategories.services";

const listCategoriesController = async (req: Request, res: Response) => {
  const data = await listCategoriesService();
  return res.status(200).json(data);
};

const createCategoriesController = async (req: Request, res: Response) => {
  const categoriesData = req.body;
  const newData = await createCategoriesServices(categoriesData);
  return res.status(201).json(newData);
};

export { listCategoriesController, createCategoriesController };
