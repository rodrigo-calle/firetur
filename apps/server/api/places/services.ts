import { Place, PlaceCreate } from "../../db/schemas/place";
import AppDataSource from "../../db/index";
import { Place as PlaceEntity } from "./entities";

const placeRepository = AppDataSource.getRepository(PlaceEntity);

export const createPlace = async (data: PlaceCreate): Promise<Place> => {
  const place = await placeRepository.save(data);
  return place;
};

export const getPlaces = async (): Promise<Place[]> => {
  const places = await placeRepository.find();
  return places;
};
