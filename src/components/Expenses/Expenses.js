import './Expenses.css'
import Card from '../UI/Card'
import ExpenseItem from './ExpenseItem'
import ExpensesFilter from './ExpenseFilter'

function Expenses(props){
    
    return(
        <Card className='expenses'>
            <ExpensesFilter />
            <ExpenseItem expenseData={props.expenses[0]}/>
            <ExpenseItem expenseData={props.expenses[1]}/>
        </Card>
    )
}

export default Expenses