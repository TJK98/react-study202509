import React, { useState } from 'react';
import './ExpenseItem.css';
import ExpenseDate from "./ExpenseDate.jsx"; // 전용 css를 넣을 때 import 해주는 게 리액트의 방식이다.

const ExpenseItem = ({expense/*title, price, date*/})/*(props)*//*title이라고 하지 않고 props로 전달*/ => {

    // console.log(props); // props의 정체는 객체
    // console.log(props.title); // title의 값을 꺼내려면 props가 아닌 title을 꺼내야한다.

    // const {title, price, date} = props;

    const {title, date, price} = expense;
    // let { title, date, price } = expense;

    // 상태 변수를 사용하는 useState 훅
    // React.useState(); -> useState();로 앞에 React를 생략하려면 import를 해줘야 한다.
    /*
        useState훅의 리턴값은 배열이며
        첫번째 요소는 관리할 상태값의 초기값
        두번째 요소는 해당 상태값을 변경할 때 사용하는 setter함수
    */
    const x = useState(title);
    console.log(`x: `, x[0]);

    // 원화 표기법으로 변환
    // 정적인 변환
    const formatPrice = new Intl.NumberFormat('ko-KR').format(price);

/*
    // 애초에 버튼을 잡아오지 못한다. 그리고 버튼 하나 당 이벤트가 List의 갯수 만큼 걸린다.
    // 그래서 인라인 방식으로 onClick으로 걸어야 한다.
    const $btn1 = document.getElementById('btn1');
    console.log(`btn1: `,$btn1 );

    // 버튼 이벤트 보다 return이 나중에 실행 되기 때문에 btn1의 값은 null이 된다.
    $btn1.addEventListener('click', e => {
        alert(`click!`);
    });
*/

    // 이벤트 핸들러, 밖에서 이벤트 핸들러를 정의해도 되고 인라인 방식으로 안에 정의해도 된다.
    // onclick과 onClick은 다른다 onClick은 jsx 문법으로 함수이다. addEventListener로 변환되어 들어간다.
    // 특정 dom에 걸 때는 return 전에 수행 되기 때문에 걸리지 않는다. body나 이미 정의 되어 있는 것에는 가능.
    const clickHandler = e => {
        // 리액트는 변수값이 바뀐다고 화면을 다시 그리지 않는다.
        // 리액트에게 리랜더링(동적인 변환)을 명령하려면 상태값으로 처리해야 된다.
        // console.log(`변경 전: ${ title }`);
        console.log(`변경 전: ${x[0]}`);
        // title = `햄버거`;
        // x[0] = `햄버거`;
        // 상태값을 직접 변경하지 않고 setter를 통해 변경해야 된다.
        x[1](`햄버거`);
        // console.log(`변경 후: ${ title }`);
        console.log(`변경 후: ${x[0]}`);
    };

    return (
        <div className='expense-item'>
            {/*<div>2025-08-24</div>*/}
            {/*<div>{date.toLocaleString()}</div>*/}
            <ExpenseDate expenseDate={date} /> {/*props는 상위 컴포넌트(부모 컴포넌트)가 하위 컴포넌트(자식 컴포넌트)에게 전달해주는 단방향, 위에서 아래로*/}
            <div className='expense-item__description'>
                {/*<h2>점심밥</h2>*/}
                {/*<h2>{title}</h2>*/}
                <h2>{x[0]}</h2>
                {/*<div className='expense-item__price'>10000원</div>*/}
                <div className='expense-item__price'>{formatPrice}원</div>
            </div>

            <button id='btn1' onClick={clickHandler}>버튼 1</button>
            <button id='btn2' onDoubleClick={e => alert(`더블 클릭!`)}>버튼 2</button>
        </div>
    );
};

export default ExpenseItem;
