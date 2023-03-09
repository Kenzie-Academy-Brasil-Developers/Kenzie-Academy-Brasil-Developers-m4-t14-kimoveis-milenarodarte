import { Request, Response } from "express";
import { IRealEstateRequest } from "../interfaces/realEstate.interface";
import createRealEstateService from "../services/realEstate/createRealEstate.services";
import listRealEstateService from "../services/realEstate/listRealEstate.services";

const createRealEstateController = async (req: Request, res: Response) => {
  const RealEstateData: IRealEstateRequest = req.body;
  const realEstate = await createRealEstateService(RealEstateData);
  return res.status(201).json(realEstate);
};
const listRealEstateController = async (req: Request, res: Response) => {
  const realEstate = await listRealEstateService();
  return res.status(200).json(realEstate);
};
export { createRealEstateController, listRealEstateController };
