import React from 'react';
import './NewExpense.css';
import ExpenseForm from './ExpenseForm';

const NewExpense = ({ onSave }) => {
    return (
        <div className='new-expense'>
            {/*함수 이름을 굳이 바꿔주지 않아도 된다.*/}
            <ExpenseForm onAdd={onSave} />
        </div>
    );
};

export default NewExpense;
