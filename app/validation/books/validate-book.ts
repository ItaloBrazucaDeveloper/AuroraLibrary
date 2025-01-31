import { z } from "zod";
import { bookSchema } from "./book-schema";
import { BookSchemaType } from "./book-schema-type";

export function validateBook(formData: FormData) {
  const book: BookSchemaType = {
    title: String(formData.get('title')),
    author: String(formData.get('author')),
    publisher: String(formData.get('author')),
    year: Number(formData.get('author')),
    book_cover: (formData.get('book_cover')) as File,
  }
  const validate = bookSchema.safeParse(book);

  if (validate.success) {
    return {
      success: {
        data: validate.data
      }
    };
  }

  return {
    issues: validate.error.issues
  };
}