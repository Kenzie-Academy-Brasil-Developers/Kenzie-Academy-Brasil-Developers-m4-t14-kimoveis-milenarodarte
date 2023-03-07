import { TimeLike } from "fs";
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from "typeorm";
import { RealEstate } from "./realEstate.entity";
import { User } from "./users.entity";
@Entity("schedules_users_properties")
class Schedule {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column({ type: "date" })
  date: string | Date;

  @Column({ type: "time" })
  hour: Date;

  @ManyToOne(() => RealEstate, { onDelete: "CASCADE" })
  realEstate: RealEstate;

  @ManyToOne(() => User, { onDelete: "CASCADE" })
  user: User;
}
export { Schedule };
