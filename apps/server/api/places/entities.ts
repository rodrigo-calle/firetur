import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";

@Entity()
export class Place {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column("varchar", {
    nullable: false,
  })
  name!: string;

  @Column("varchar", {
    nullable: false,
  })
  description!: string;

  @Column("varchar", {
    nullable: false,
  })
  province!: string;

  @Column("varchar", {
    nullable: false,
  })
  district!: string;

  @Column("varchar", {
    nullable: false,
  })
  country!: string;

  @Column("double precision", {
    default: 0.0,
  })
  price!: number;

  @Column("timestamp", {
    nullable: false,
    default: () => "CURRENT_TIMESTAMP",
  })
  created_at!: Date;

  @OneToMany(() => PlaceImage, (image) => image.place, {
    cascade: true,
  })
  place_images!: PlaceImage[];
}

@Entity()
export class PlaceImage {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column("varchar")
  title!: string;

  @Column("varchar")
  image_url!: string;

  @ManyToOne(() => Place, (place) => place.place_images, {
    onDelete: "CASCADE",
  })
  place!: Place;
}
