import React, {useState} from 'react';
import './ExpenseForm.css';

const ExpenseForm = () => {

    // console.log(`RENDERING`);

    // 입력값을 단일 값 상태관리
    // const [title, setTitle] = useState(``);
    // const [price, setPrice] = useState();
    // const [date, setDate] = useState(null);

    const initUserInputState = {
        title: ``,
        price: 0,
        date: null
    };

    // 입력값을 객체로 한번에 상태관리
    const [userInput, setUserInput] = useState(initUserInputState);

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

        // const payload = { title, price, date };

        // console.log(payload);

        // userInput 자체가 payload이기 때문에 payload를 따로 만들지 않아도 된다.
        console.log(`userInput: `, userInput);

        // 입력창 초기화
        // document.querySelectorAll(`input`).forEach($input => $input.value= ``);
        // 리액트에선 이렇게 하지 않는다.
        /*
            input태그에다가 값을 입력하면 -> 상태변수에 저장됨  (단방향)
            상태변수의 값을 바꾸면 -> input이 갱신된다?  (X)    (양방향)
        */
        // setTitle(``);
        // setPrice(0);
        // setDate(null);

        setUserInput(initUserInputState)
    };

    // 제목 입력 이벤트
    const titleChangeHandler = e => {
        /*
             리액트는 기존 객체에서 프로퍼티 값만을 바꾸면 상태 변경을 감지 하지 못하여 리랜더링을 수행하지 않는다.
         */
        // userInput.title = e.target.value

        // 주소값이 다른 새로운 객체를 만들어서 넣어야 리액트가 상태 변경을 감지한다.
        const newUserInput = {
            // 기존 userInput 갖고 있는 값들을 세팅 해줘야 된다.
            // price: userInput.price,
            // date: userInput.date,
            ...userInput, // ...으로 spread 하여 기존 값들은 다 복사하고 title 값만 바꿔주면 된다. 위 존재 해야 된다.
            title: e.target.value
        }
        setUserInput(newUserInput);

        // console.log(userInput);
    };

    // 가격 입력 이벤트, 새 객체 넣기
    const priceChangeHandler = e => setUserInput({
        // 기존 userInput 갖고 있는 값들을 세팅 해줘야 된다.
        // title: userInput.title,
        // date: userInput.date,
        ...userInput, // ...으로 spread 하여 기존 값들은 다 복사하고 price 값만 바꿔주면 된다. 위 존재 해야 된다.
        price: +e.target.value
    });

    // 날짜 입력 이벤트, 새 객체 넣기
    const dateChangeHandler = e => setUserInput({
        // 기존 userInput 갖고 있는 값들을 세팅 해줘야 된다.
        // title: userInput.title,
        // price: userInput.price,
        ...userInput, // ...으로 spread 하여 기존 값들은 다 복사하고 date 값만 바꿔주면 된다. 위 존재 해야 된다.
        date: e.target.value,
    });

    return (
        <form onSubmit={handleSubmit}>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label>Title</label>
                    <input
                        type='text'
                        onInput={titleChangeHandler}
                        value={userInput.title}
                    />
                </div>
                <div className='new-expense__control'>
                    <label>Price</label>
                    <input
                        type='number'
                        min='100'
                        step='100'
                        onInput={priceChangeHandler}
                        value={userInput.price || ''} // price가 falsy일 경우 빈 문자열
                    />
                </div>
                <div className='new-expense__control'>
                    <label>Date</label>
                    <input
                        type='date'
                        min='2019-01-01'
                        max={getTodayDate()}
                        onInput={dateChangeHandler}
                        value={userInput.date ?? ''} // date가 null 이면 빈 문자열
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
