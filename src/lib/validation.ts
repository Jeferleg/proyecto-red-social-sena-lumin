import { z } from "zod";

const requiredString = z.string().trim().min(1, "Requerido")

export const signUpSchema = z.object({
    email: requiredString.email("Dirección de correo electrónico no válida"),
    username: requiredString.regex(
        /^[a-zA-Z0-9_-]+$/,
        "Solo se permiten letras, números, - y _ "
    )
}) 