import { z } from "zod";
import { bookSchema } from "./book-schema";

export type BookType = z.infer<typeof bookSchema>;