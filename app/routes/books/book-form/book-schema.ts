import { z } from "zod";

export const bookSchema = z.object({
  title: z.string().nonempty(),
  author: z.string().nonempty(),
  publisher: z.string().nonempty(),
  year: z.date().nullable(),
  quantity_books: z.number().min(1),
  book_cover: z.string().nonempty(),
});