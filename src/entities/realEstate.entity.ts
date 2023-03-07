import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  OneToOne,
  JoinColumn,
  OneToMany,
  ManyToMany,
  ManyToOne,
} from "typeorm";
import { nullable } from "zod";
import { Address } from "./adresses.entity";
import { Category } from "./categories.entity";
@Entity("real_estate")
class RealEstate {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column({ type: "boolean", nullable: true })
  sold?: boolean | undefined | null;

  @Column({ type: "decimal", precision: 12, scale: 2 })
  value: number;

  @Column({ type: "integer" })
  size: number;

  @CreateDateColumn()
  createdAt: string;

  @UpdateDateColumn()
  updatedAt: string;

  @OneToOne(() => Address, { cascade: true })
  @JoinColumn()
  adress: Address;

  @ManyToOne(() => Category, { onDelete: "SET NULL", nullable: true })
  category: Category | null;
}
export { RealEstate };
