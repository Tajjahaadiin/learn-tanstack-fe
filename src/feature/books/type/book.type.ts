// src/schemas/bookSchema.ts
import { z } from "zod";

export const bookSchema = z.object({
  id: z.number(),
  title: z.string().min(1, "Title is required"),
  author: z.string().min(1, "Author is required"),
});

export type BookDTO = z.infer<typeof bookSchema>;
