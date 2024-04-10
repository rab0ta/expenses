import './App.css';
import ExpenseItem from './components/ExpenseItem';

function App() {
  const expenses = [
    {
      date: new Date(2024, 10, 4),
      title: 'New book',
      price: 30.99
    },
    {
      date: new Date(2024, 10, 4),
      title: 'new jeans',
      price: 99.99
    }
  ]
  return (
    <div className="App">
     <ExpenseItem 
     expenseData={expenses[0]}
     />
     <ExpenseItem 
     expenseData={expenses[1]}
     />
    </div>
  );
}

export default App;
