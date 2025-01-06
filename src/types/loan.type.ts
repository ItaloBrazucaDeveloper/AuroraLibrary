import { BookType } from "./book.type";
import { ClientType } from "./client.type";

export type LoanType = {
  user: ClientType;
  book: BookType;
  loanDate: Date;
  returnDate: Date;
  returned: boolean;
}