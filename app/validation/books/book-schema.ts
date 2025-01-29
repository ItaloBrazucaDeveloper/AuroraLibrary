import { z } from "zod";

const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB
const ACCEPTED_IMAGE_TYPES = ["image/jpeg", "image/jpg", "image/png", "image/webp"];

export const bookSchema = z.object({
  title: z.string(),
  author: z.string(),
  publisher: z.string(),
  year: z.number(),
  book_cover: z.instanceof(File)
    .refine(file => file.size > MAX_FILE_SIZE)
    .refine(file => ACCEPTED_IMAGE_TYPES.includes(file.type)),
});