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
  mediaIds: z.array(z.string()).max(5, "No puede tener más de 5 archivos adjuntos"),
});

export const updateUserProfileSchema = z.object({
  displayName: requiredString,
  bio: z.string().max(1000, "Debe tener como máximo 1000 caracteres"),
});

export type UpdateUserProfileValues = z.infer<typeof updateUserProfileSchema>;

export const createCommentSchema = z.object({
  content: requiredString,
});