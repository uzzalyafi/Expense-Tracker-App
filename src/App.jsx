import { useState } from "react";
import Expense from "./components/Expense";
import ExpenseFiltter from "./components/ExpenseFiltter";
import ExpenseFrom from "./components/ExpenseFrom";

const App = () => {
  const [expense, setExpense] = useState([
    {
      id: 1,
      catagory: "Food",
      discription: "Lunch",
      amount: 200,
    },
    {
      id: 2,
      catagory: "Utility",
      discription: "Dinner",
      amount: 300,
    },
    {
      id: 3,
      catagory: "Tour",
      discription: "Breakfast",
      amount: 100,
    },
    {
      id: 4,
      catagory: "Food",
      discription: "Snack",
      amount: 50,
    },
  ]);

  const [selectCatagory, setSelectCatagory] = useState("All");

  const filteredExpense = expense.filter((item) => {
    if (selectCatagory === "All") {
      return item;
    } else {
      return item.catagory === selectCatagory;
    }
  });

  return (
    <>
      <section className="max-w-3xl mx-auto bg-stone-50 p-6 shadow-sm">
        <ExpenseFrom
          onSubmit={(NewExpense) =>
            setExpense([...expense, { ...NewExpense, id: expense.length + 1 }])
          }
        />
        <ExpenseFiltter onSelect={(catagory) => setSelectCatagory(catagory)} />
        <Expense
          expense={filteredExpense}
          onDelete={(id) =>
            setExpense(expense.filter((item) => item.id !== id))
          }
        />
      </section>
    </>
  );
};

export default App;
