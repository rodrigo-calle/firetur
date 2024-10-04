import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  ManyToMany,
  JoinTable,
} from "typeorm";
import { Package as PackageEntity } from "../packages/entities";
import { User } from "../users/entities";

@Entity()
export class Business {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column("varchar", {
    nullable: false,
  })
  title!: string;
  @Column("varchar", {
    nullable: false,
  })
  description!: string;
  @Column("timestamp", {
    default: () => "CURRENT_TIMESTAMP",
  })
  created_at!: Date;

  @OneToMany(() => PackageEntity, (packages) => packages.business)
  packages!: PackageEntity[];

  // @ManyToMany(() => User, (user) => user.businesses)
  // @JoinTable()
  // users!: number[];

  @ManyToMany(() => User, (user) => user.businesses)
  users!: User[];
}
