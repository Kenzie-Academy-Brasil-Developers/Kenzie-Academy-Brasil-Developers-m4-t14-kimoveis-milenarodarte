import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { AppError } from "../../errors";
import { Schedule, User, RealEstate } from "../../entities";
import { IScheduleRequest } from "../../interfaces/schedule.interface";

const createScheduleServices = async (
  payload: IScheduleRequest,
  userID: number
): Promise<string> => {
  const schedulesRepository: Repository<Schedule> =
    AppDataSource.getRepository(Schedule);
  const realEstateRepository: Repository<RealEstate> =
    AppDataSource.getRepository(RealEstate);
  const userRepository: Repository<User> = AppDataSource.getRepository(User);

  const date = payload.date;
  const hour = payload.hour;
  const findRealEstateIDWithEqualDataAndHour = await schedulesRepository
    .createQueryBuilder("schedules")
    .select()
    .where("schedules.realEstateId = :realEstateId", {
      realEstateId: payload.realEstateId,
    })
    .andWhere("schedules.date = :date", { date: date })
    .andWhere("schedules.hour = :hour", { hour: hour })
    .getOne();

  if (findRealEstateIDWithEqualDataAndHour !== null) {
    throw new AppError(
      "Schedule to this real estate at this date and time already exists",
      409
    );
  }
  const findUserIdWithEqualDateAndHour = await schedulesRepository
    .createQueryBuilder("schedules")
    .select()
    .where("schedules.userId = :userId", { userId: userID })
    .andWhere("schedules.date = :date", { date: date })
    .andWhere("schedules.hour = :hour", { hour: hour })
    .getOne();

  if (findUserIdWithEqualDateAndHour !== null) {
    throw new AppError(
      "User schedule to this real estate at this date and time already exists",
      409
    );
  }
  const weekdays = [1, 2, 3, 4, 5];
  const scheduleDate = new Date(date);
  const isWeekDays = weekdays.includes(scheduleDate.getDay());

  if (!isWeekDays) {
    throw new AppError("Invalid date, work days are monday to friday", 400);
  }

  const [hours, minutes] = hour.split(":");
  const hoursNumber = Number(hours);
  const minutesNumber = Number(minutes);

  if (hoursNumber < 8) {
    throw new AppError("Invalid hour, available times are 8AM to 18PM", 400);
  }
  if (hoursNumber >= 18) {
    throw new AppError("Invalid hour, available times are 8AM to 18PM", 400);
  }

  const findRealEstate = await realEstateRepository.findOne({
    where: {
      id: payload.realEstateId,
    },
  });
  if (findRealEstate === null) {
    throw new AppError("RealEstate not found", 404);
  }
  const findUserRepository = await userRepository.findOneBy({
    id: userID,
  });

  const schedule = schedulesRepository.create({
    ...payload,
    realEstate: findRealEstate!,
    user: findUserRepository!,
  });

  await schedulesRepository.save(schedule);

  return "Schedule created";
};
export { createScheduleServices };
