import type { Expense } from '../types/Expense';

type ExpenseItemProps = {
  expense: Expense;
};

export default function ExpenseItem({ expense }: ExpenseItemProps) {
  return (
    <div className="expense-item">
      <div className="expense-date">{new Date(expense.date).toLocaleDateString()}</div>
      <div className="expense-description">{expense.description}</div>
      <div className="expense-payer">Paid by: {expense.payer}</div>
      <div className="expense-amount">${expense.amount.toFixed(2)}</div>
    </div>
  );
}