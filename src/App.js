import './App.css';
import Expenses from './components/Expenses/Expenses'
import NewExpense  from './components/NewExpense/NewExpense';
import { useState } from 'react';

const DYMMY_EXPENSES = [
  {
    id: "id1",
    date: new Date(2024, 10, 4),
    title: 'New book',
    price: 30.99
  },
  {
    id: 'id2',
    date: new Date(2024, 10, 4),
    title: 'new jeans',
    price: 99.99
  },
  {
    id: 'id3',
    date: new Date(2024, 10, 4),
    title: 'new bag',
    price: 139.99
  }
]

const App = () => {
  const [expenses, setExpenses] = useState(DYMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses((previousExpenses) => {
      return [expense, ...previousExpenses]
    })
  }
  return (
    <div className="App">
      <NewExpense onAddExpense={addExpenseHandler}></NewExpense>
      <Expenses expenses={expenses} />
    </div>
  );
}

export default App;
