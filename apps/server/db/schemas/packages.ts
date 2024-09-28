import * as z from "zod";
import { businessSchema } from "./business";

export const packageSchema = z.object({
  id: z.number(),
  name: z.string(),
  description: z.string(),
  price: z.number(),
  created_at: z.date(),
  business: businessSchema
  // business_id: z.number(),
});
export const packageCreateSchema = packageSchema.omit({
  id: true,
  created_at: true,
});
export const packageUpdateSchema = packageCreateSchema.partial();

export type Package = z.infer<typeof packageSchema>;
export type PackageCreate = z.infer<typeof packageCreateSchema>;
export type PackageUpdate = z.infer<typeof packageUpdateSchema>;
