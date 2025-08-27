import React from 'react';
import './ExpenseList.css';
import ExpenseItem from './ExpenseItem.jsx';

const ExpenseList = ({expenses: expenseList}) => {

/*    const expenseList = [
        {
            title: `피자`,
            price: 20000,
            date: new Date(2025, 7, 13)
        },
        {
            title: `치킨`,
            price: 18000,
            date: new Date(2025, 8, 7)
        },
        {
            title: `간짜장`,
            price: 9000,
            date: new Date(2025, 1, 19)
        }
    ];*/

    return (
        <div className='expenses'>
            {/*<ExpenseItem*/}
            {/*    title='피자'*/}
            {/*    price={20000}*/}
            {/*    date={new Date(2025, 7, 13)}*/}
            {/*/> /!*문자열만 {} 생략 가능, 마치 함수에게 파라미터를 전달하는 효과*!/*/}
            {/*<ExpenseItem*/}
            {/*    title='치킨'*/}
            {/*    price={18000}*/}
            {/*    date={new Date(2025, 8, 7)}*/}
            {/*/>*/}
            {/*<ExpenseItem*/}
            {/*    title='간짜장'*/}
            {/*    price={9000}*/}
            {/*    date={new Date(2025, 1, 19)}*/}
            {/*/>*/}

            <ExpenseItem expense={expenseList[0]} />
            <ExpenseItem expense={expenseList[1]} />
            <ExpenseItem expense={expenseList[2]} />
        </div>
    );
};

export default ExpenseList;