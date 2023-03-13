import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  OneToOne,
  JoinColumn,
  OneToMany,
  ManyToOne,
} from "typeorm";
import { Address } from "./adresses.entity";
import { Category } from "./categories.entity";
import { Schedule } from "./schedule.entity";
@Entity("real_estate")
class RealEstate {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column({ type: "boolean", default: false })
  sold: boolean;

  @Column({ type: "decimal", precision: 12, scale: 2, default: 0 })
  value: number | string;

  @Column({ type: "integer" })
  size: number;

  @CreateDateColumn({ type: "date" })
  createdAt: string;

  @UpdateDateColumn({ type: "date" })
  updatedAt: string;

  @OneToOne(() => Address, { cascade: true })
  @JoinColumn()
  address: Address;

  @ManyToOne(() => Category, { onDelete: "SET NULL", nullable: true })
  category: Category | null;

  @OneToMany(() => Schedule, (Schedule) => Schedule.realEstate)
  schedule: Schedule[];
}
export { RealEstate };
