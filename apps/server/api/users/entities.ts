import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToMany,
  JoinTable,
} from "typeorm";
import { UserRoles } from "../../db/schemas/users";
import { Business } from "../business/entities";

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column("varchar", {
    nullable: false,
  })
  name!: string;

  @Column("varchar", {
    unique: true,
    nullable: false,
  })
  email!: string;

  @Column("varchar", {
    nullable: false,
  })
  password!: string;

  @Column("boolean", {
    default: false,
  })
  confirmed!: boolean;

  @Column("timestamp", {
    default: () => "CURRENT_TIMESTAMP",
  })
  created_at!: Date;

  @Column("varchar", {
    nullable: true,
  })
  confirmation_token!: string;

  @Column("varchar", {
    nullable: true,
  })
  reset_password_token!: string;

  @Column("timestamp", {
    nullable: true,
  })
  reset_password_expires!: Date;

  @Column({
    type: "enum",
    enum: UserRoles,
    default: UserRoles.CLIENT,
  })
  role!: string;

  // @ManyToMany(() => Business, (business) => business.users)
  // @JoinTable()
  // businesses!: number[];
  @ManyToMany(() => Business, (business) => business.users)
  @JoinTable()  // @JoinTable() solo se coloca en uno de los lados de la relación
  businesses!: Business[];
}
