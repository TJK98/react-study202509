import React from 'react';
import './ExpenseDate.css';

const ExpenseDate = ({expenseDate}/*props*/) => {

    // console.log(props.expenseDate);

    const month = expenseDate.toLocaleString(`en-US`, {month: `long`}).slice(0, 3);

    // 하위 컴포넌트에게도 props 전달 가능
    return (
        <div className='expense-date'>
            {/*<div className='expense-date__month'>2025</div>*/}
            {/*<div className='expense-date__month'>{expenseDate.getMonth()}</div>*/}
            <div className='expense-date__month'>{month}</div>
            {/*<div className='expense-date__year'>Aug</div>*/}
            <div className='expense-date__year'>{expenseDate.getFullYear()}</div>
            {/*<div className='expense-date__day'>05</div>*/}
            <div className='expense-date__day'>{expenseDate.getDate()}</div>
        </div>
    );
};

export default ExpenseDate;
