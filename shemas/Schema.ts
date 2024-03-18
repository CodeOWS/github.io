// Invite

import { z } from "zod";

export const InviteShema = z
.object({
    nombre: z.string(),
    email: z.string().email(),
    linkedin: z.string().optional(),
    github: z.string().optional(),
    tlf: z.string().optional(),
    pais: z.string(),
    rol: z.string(),
})