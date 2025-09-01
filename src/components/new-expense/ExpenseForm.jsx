import React, {useState} from 'react';
import './ExpenseForm.css';

const ExpenseForm = () => {

    // 입력값을 단일 값 상태관리
    const [title, setTitle] = useState(``);
    const [price, setPrice] = useState();
    const [date, setDate] = useState(null);

    // 오늘 날짜를 YYYY-MM-DD 형식으로 가져오는 함수
    const getTodayDate = () => {
        const today = new Date();
        const year = today.getFullYear();
        const month = String(today.getMonth() + 1).padStart(2, '0'); // 월은 0부터 시작하므로 1을 더해줌
        const day = String(today.getDate()).padStart(2, '0');
        return `${year}-${month}-${day}`;
    };

    // form 제출 이벤트
    const handleSubmit = e => {
        // submit의 기본 제출은 새로고침, e.preventDefault()로 새로고침 막아주기
        e.preventDefault()
        // console.log(`form 제출`);

        // const $inputElements = document.querySelectorAll(`input`);

        // 실시간이 아닌 입력된 값을 가져오는 것
        // const payload = {
        //     // title: $inputElements[0].value,
        //     // price: $inputElements[1].value,
        //     // date: $inputElements[2].value
        //
        //     title: title,
        //     price: price,
        //     date: date
        // };

        const payload = { title, price, date };

        console.log(payload);
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label>Title</label>
                    <input type='text' onInput={e => setTitle(e.target.value)} />
                </div>
                <div className='new-expense__control'>
                    <label>Price</label>
                    <input
                        type='number'
                        min='100'
                        step='100'
                        onInput={e => setPrice(+e.target.value)}
                    />
                </div>
                <div className='new-expense__control'>
                    <label>Date</label>
                    <input
                        type='date'
                        min='2019-01-01'
                        max={getTodayDate()}
                        onInput={e => setDate(+e.target.value)}
                    />
                </div>
            </div>
            <div className='new-expense__actions'>
                <button type='submit'>Add Expense</button>
            </div>
        </form>
    );
};

export default ExpenseForm;
