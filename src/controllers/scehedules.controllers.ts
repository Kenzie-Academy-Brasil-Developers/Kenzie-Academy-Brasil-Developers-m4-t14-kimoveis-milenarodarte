import { Request, Response } from "express";
import { createScheduleServices } from "../services/schedule/createSchedule.services";

const createSchedulesController = async (req: Request, res: Response) => {
  const scheduleData = req.body;
  const newScheduleData = await createScheduleServices(
    scheduleData,
    Number(req.admin.id)
  );
  return res.status(201).json(newScheduleData);
};

export { createSchedulesController };
