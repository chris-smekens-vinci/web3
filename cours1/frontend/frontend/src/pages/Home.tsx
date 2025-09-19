import type { Expense } from "../types/Expense";
import ExpenseItem from "../components/ExpenseItem";

const mockExpenses: Expense[] = [
    {
        id: "1",
        date: "2023-10-01",
        description: "Groceries",
        payer: "Chris Smekens",
        amount: 50.0
    },
    {
        id: "2",
        date: "2023-10-02",
        description: "Baby Oil",
        payer: "Megan Fox",
        amount: 75.0
    },
    {
        id: "3",
        date: "2023-10-03",
        description: "Wine & Dine",
        payer: "Lana Rhoades",
        amount: 30.0
    },
    {
        id: "4",
        date: "2023-10-04",
        description: "Accessories",
        payer: "Teana Trump",
        amount: 15.0
    }
];

export default function Home() {
    return (
        <div>
            <h1>Expense List</h1>
            {mockExpenses.map((expense) => (
                <ExpenseItem key={expense.id} expense={expense} />
            ))}
        </div>
    );
};