import './App.css';
import Expenses from './components/Expenses/Expenses'
const App = () => {
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
    <Expenses expenses={expenses} />
    </div>
  );
}

export default App;
