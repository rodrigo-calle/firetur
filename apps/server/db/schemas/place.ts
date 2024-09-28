import * as z from "zod";

export const placeSchema = z.object({
  id: z.number(),
  name: z.string(),
  description: z.string(),
  province: z.string(),
  district: z.string(),
  country: z.string(),
  price: z.number(),
  created_at: z.date(),
  place_images: z.array(
    z.object({
      title: z.string(),
      image_url: z.string(),
    })
  ),
  // business_id: z.number(),
});

export const placeCreateSchema = placeSchema.omit({
  id: true,
  created_at: true,
});
export const placeUpdateSchema = placeCreateSchema.partial();

export type PlaceCreate = z.infer<typeof placeCreateSchema>;
export type PlaceUpdate = z.infer<typeof placeUpdateSchema>;
export type Place = z.infer<typeof placeSchema>;
