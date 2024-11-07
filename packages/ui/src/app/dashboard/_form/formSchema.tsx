import { z } from "zod";

export const formSchema = z.object({
  promoDescription: z
    .string()
    .min(2, { message: "promo description must be at least 2 characters." })
    .max(250),
});
