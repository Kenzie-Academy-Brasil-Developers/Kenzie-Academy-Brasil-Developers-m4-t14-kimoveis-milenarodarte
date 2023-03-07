import { TimeLike } from "fs";
import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";
@Entity("categories")
class Category {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column({ type: "date" })
  date: Date;

  @Column({ type: "time" })
  hour: TimeLike;
}
export { Category };
