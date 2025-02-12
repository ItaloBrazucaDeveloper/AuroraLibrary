import { BookType } from './book-type';
import { ClientType } from './client-type';

export type LoanType = {
	id: number;
	client: ClientType;
	book: BookType;
	loan_date: string;
	delivery_date: string;
	limit_date: string;
	penalty: number;
	is_completed: boolean;
	fine_status: boolean;
};
