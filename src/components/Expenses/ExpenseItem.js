import ExpenseDate from './ExpenseDate'
import './ExpenseItem.css'
import Card from '../UI/Card'
import { useState } from 'react'


function ExpenseItem(props){
    const [title, setTitle] = useState(props.expenseData.title)
    const clickHandler = () =>{
        console.log('click!')
        setTitle(`Updated by click ${title}`)
        console.log(title)
        props.expenseData.price = title
    }
    return (
    <Card className='expense-item'>
        <ExpenseDate 
        date ={props.expenseData.date}
        />
        <div className='expense-item__description'>
            <h2>{props.expenseData.title}</h2>
            <div className='expense-item__price'>{props.expenseData.price}</div>
        </div>
        <button onClick={clickHandler}>Click Me</button>
    </Card>
    )
}
export default ExpenseItem