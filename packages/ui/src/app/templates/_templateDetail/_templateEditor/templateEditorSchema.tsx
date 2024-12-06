import { z } from "zod";

export const templateEditorSchema = z.object({
  header: z.string(),
  body: z.string(),
  footer: z.string(),
});
