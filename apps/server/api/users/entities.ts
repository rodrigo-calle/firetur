import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
import { UserRoles } from "../../db/schemas/users";

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
}
