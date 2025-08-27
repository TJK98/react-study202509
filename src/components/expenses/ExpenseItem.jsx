import React from 'react';
import './ExpenseItem.css'; // 전용 css를 넣을 때 import 해주는 게 리액트의 방식이다.

const ExpenseItem = ({title, price, date})/*(props)*//*title이라고 하지 않고 props로 전달*/ => {

    // console.log(props); // props의 정체는 객체
    // console.log(props.title); // title의 값을 꺼내려면 props가 아닌 title을 꺼내야한다.

    // const {title, price, date} = props;

    return (
        <div className='expense-item'>
            {/*<div>2025-08-24</div>*/}
            <div>{date.toLocaleString()}</div>
            <div className='expense-item__description'>
                {/*<h2>점심밥</h2>*/}
                <h2>{title}</h2>
                {/*<div className='expense-item__price'>10000원</div>*/}
                <div className='expense-item__price'>{price}원</div>
            </div>
        </div>
    );
};

export default ExpenseItem;
