import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { Package as PackageEntity } from "../packages/entities";

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
}
