import { z } from "zod";
import { bookSchema } from "./book-schema";

export type BookSchemaType = z.infer<typeof bookSchema>;