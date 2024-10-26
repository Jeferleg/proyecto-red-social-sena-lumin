import { z } from "zod";

const requiredString = z.string().trim().min(1, "Requerido");

export const signUpSchema = z.object({
  email: requiredString.email("Dirección de correo electrónico inválida"),
  username: requiredString.regex(
    /^[a-zA-Z0-9_-]+$/,
    "Solo se permiten letras, números, - y _",
  ),
  password: requiredString.min(8, "Debe tener al menos 8 caracteres"),
});

export type SignUpValues = z.infer<typeof signUpSchema>;

export const loginSchema = z.object({
  username: requiredString,
  password: requiredString,
});

export type LoginValues = z.infer<typeof loginSchema>;

export const createPostSchema = z.object({
  content: requiredString,
})