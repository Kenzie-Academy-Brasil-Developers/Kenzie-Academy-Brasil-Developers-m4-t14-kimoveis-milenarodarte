import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { AppError } from "../../errors";
import { Schedule, User, RealEstate } from "../../entities";
import {
  IScheduleRequest,
  IscheduleResponse,
} from "../../interfaces/schedule.interface";
import { ScheduleSchemaResponse } from "../../schemas/schedules.schemas";

const createScheduleServices = async (
  payload: IScheduleRequest,
  userID: number
): Promise<any> => {
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
    throw new AppError("Real Estate already schedule for this date/hour", 409);
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
      "User already schedule another real estate for this hour/date",
      409
    );
  }
  const weekdays = [1, 2, 3, 4, 5];
  const scheduleDate = new Date(date);
  const isWeekDays = weekdays.includes(scheduleDate.getDay());

  if (!isWeekDays) {
    throw new AppError(
      "its only been allowed to schedule in business day",
      409
    );
  }

  const commercialHourBegins = new Date();
  commercialHourBegins.setHours(8, 0, 0);
  const commercialHourEnds = new Date();
  commercialHourEnds.setHours(18, 0, 0);

  const hourSchedule = new Date(hour);
  if (
    hourSchedule < commercialHourBegins ||
    hourSchedule > commercialHourEnds
  ) {
    throw new AppError("its only been allowed schedule in business hours", 409);
  }
  const findRealEstate = await realEstateRepository.findOne({
    where: {
      id: payload.realEstateId,
    },
  });
  const findUserRepository = await userRepository.findOneBy({
    id: userID,
  });
  console.log(findRealEstate, findUserRepository);

  const schedule = schedulesRepository.create({
    ...payload,
    realEstate: findRealEstate!,
    user: findUserRepository!,
  });
  //

  await schedulesRepository.save(schedule);
  console.log(schedule, "aaaa");

  return schedule;
};
export { createScheduleServices };
