import { PrimaryGeneratedColumn, Column, Entity, ManyToOne } from "typeorm";
import { Business as BusinessEntity } from "../business/entities";

@Entity()
export class Package {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column("varchar")
  name!: string;

  @Column("varchar")
  description!: string;

  @Column("double precision")
  price!: number;

  @Column("timestamp", {
    default: () => "CURRENT_TIMESTAMP",
  })
  created_at!: Date;

  @ManyToOne(() => BusinessEntity, (business) => business.packages, {
    onDelete: "CASCADE",
  })
  business!: BusinessEntity;
}
