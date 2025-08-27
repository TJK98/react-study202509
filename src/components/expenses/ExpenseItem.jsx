import React from 'react';
import './ExpenseItem.css'; // 전용 css를 넣을 때 import 해주는 게 리액트의 방식이다.

const ExpenseItem = () => {
    return (
        <div className='expense-item'>
            <div>2025-08-024</div>
            <div className='expense-item__description'>
                <h2>점심밥</h2>
                <div className='expense-item__price'>10000원</div>
            </div>
        </div>
    );
};

export default ExpenseItem;
