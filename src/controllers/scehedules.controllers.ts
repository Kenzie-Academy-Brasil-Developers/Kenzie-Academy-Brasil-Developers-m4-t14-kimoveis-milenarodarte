import { Request, Response } from "express";
import { createScheduleServices } from "../services/schedule/createSchedule.services";
import listSchedulesByRealEstateService from "../services/schedule/listRealEstateSchedules.service";

const createSchedulesController = async (req: Request, res: Response) => {
  const scheduleData = req.body;
  const newScheduleData = await createScheduleServices(
    scheduleData,
    Number(req.admin.id)
  );
  return res.status(201).json({ message: newScheduleData });
};
const listScheduleByRealEstateController = async (
  req: Request,
  res: Response
) => {
  const id = req.params.id;
  const data = await listSchedulesByRealEstateService(Number(id));
  return res.status(200).json(data);
};
export { createSchedulesController, listScheduleByRealEstateController };
