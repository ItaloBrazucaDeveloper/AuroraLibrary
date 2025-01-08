export type LoanType = {
  id_loan: number;
  loan_date: string;
  limit_date: string;
  delivery_date: string;
  penalty: number;
  is_completed: boolean;
  fine_status: boolean;
}