import { Place, PlaceCreate } from "../../db/schemas/place";
import AppDataSource from "../../db/index";
import {
  Place as PlaceEntity,
  PlaceImage as PlaceImageEntity,
} from "./entities";

const placeRepository = AppDataSource.getRepository(PlaceEntity);
const placeImageRepository = AppDataSource.getRepository(PlaceImageEntity);

export const createPlace = async (data: PlaceCreate): Promise<Place> => {
  const placeImages: PlaceImageEntity[] = [];
  for (const image of data.place_images) {
    const newImage = new PlaceImageEntity();
    newImage.title = image.title;
    newImage.image_url = image.image_url;
    newImage.place
    await placeImageRepository.save(newImage);
    placeImages.push(newImage);
  }

  const place = await placeRepository.save({
    ...data,
    place_images: placeImages,
  });
  return place;
};

export const getPlaces = async (): Promise<Place[]> => {
  const places = await placeRepository.find({
    relations: {
      place_images: true,
    }
  });
  return places;
};

export const getPlace = async (id: number): Promise<Place | null> => {
  const place = await placeRepository.findOneBy({ id });
  return place;
};


