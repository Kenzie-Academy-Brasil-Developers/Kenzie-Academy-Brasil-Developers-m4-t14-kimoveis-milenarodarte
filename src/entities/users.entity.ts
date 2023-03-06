import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
} from "typeorm";

@Entity("users")
class User {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column({ type: "varchar", length: 45 })
  name: string;

  @Column({ type: "varchar", length: 45, unique: true })
  email: string;

  @Column({ type: "boolean" })
  admin: boolean;

  @Column({ type: "varchar", length: 120 })
  password: string;

  @CreateDateColumn()
  createdAt: string;

  @UpdateDateColumn()
  updatedAt: string;

  @DeleteDateColumn({ type: "date", nullable: true })
  deletedAt?: string | null | undefined | Date;
}
export { User };
