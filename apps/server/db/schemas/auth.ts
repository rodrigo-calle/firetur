import { userSchema } from "./users";

export const loginSchema = userSchema.pick({
  email: true,
  password: true,
});
