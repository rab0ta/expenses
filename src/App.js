import './App.css';
import ExpenseItem from './components/ExpenseItem';
import './components/Expenses.css';

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
      <div className='expenses'>
        <ExpenseItem 
     expenseData={expenses[0]}
     />
     <ExpenseItem 
     expenseData={expenses[1]}
     />
      </div>
     
    </div>
  );
}

export default App;
