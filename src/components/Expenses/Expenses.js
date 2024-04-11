import './Expenses.css'
import Card from '../UI/Card'
import ExpenseItem from './ExpenseItem'
import ExpensesFilter from './ExpenseFilter'

function Expenses(props){
    return(
        <Card className='expenses'>
            <ExpensesFilter />
            {
                props.expenses.map((expense) =>{
                    return <ExpenseItem expenseData={expense} key={expense.id}/>
                })
            }
        </Card>
    )
}

export default Expenses