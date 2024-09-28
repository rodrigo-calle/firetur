import * as z from "zod";

export const businessSchema = z.object({
  id: z.number(),
  title: z.string(),
  description: z.string(),
  created_at: z.date(),
});

export const businessCreateSchema = businessSchema.omit({
  id: true,
  created_at: true,
});
export const businessUpdateSchema = businessCreateSchema.partial();
export type Business = z.infer<typeof businessSchema>;
export type BusinessCreate = z.infer<typeof businessCreateSchema>;
export type BusinessUpdate = z.infer<typeof businessUpdateSchema>;