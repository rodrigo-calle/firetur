import * as z from "zod";

export enum UserRoles {
  ADMIN = "admin",
  CLIENT = "client",
  GUIDE = "guide",
}
export const userRolesSchema = z.nativeEnum(UserRoles);

export const userSchema = z.object({
  id: z.number(),
  name: z.string(),
  email: z.string(),
  password: z.string(),
  confirmed: z.boolean(),
  created_at: z.date(),
  confirmation_token: z.string(),
  reset_password_token: z.string(),
  reset_password_expires: z.date(),
  role: userRolesSchema.default(UserRoles.CLIENT),
});

export const userCreateSchema = userSchema.omit({
  id: true,
  confirmed: true,
  created_at: true,
  confirmation_token: true,
  reset_password_expires: true,
  reset_password_token: true,
});
export const userUpdateSchema = userCreateSchema.partial();

export type User = z.infer<typeof userSchema>;
export type UserCreate = z.infer<typeof userCreateSchema>;
export type UserUpdate = z.infer<typeof userUpdateSchema>;
