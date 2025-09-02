import React, {useState} from 'react';
import './ExpenseList.css';
import ExpenseItem from './ExpenseItem.jsx';
import Card from "../ui/Card.jsx";
import ExpenseFilter from "./ExpenseFilter.jsx";

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

    const [year, setYear] = useState(new Date().getFullYear().toString());

    // ExpenseFilter.jsx에서 선택한 연도 값을 ExpenseList.jsx로 끌어올려서 출력
    // 함수를 만들어서 전달해줘야 한다.
    const onFilterChange = (filteredYear) => {
        console.log(`선택된 연도: ${filteredYear}`);
        setYear(filteredYear);
    }

    // 반복문을 통해 컴포넌트 배열을 리턴하는 함수
    // const foo = () => {
    //     // const arr = [];
    //     // for (const ex of expenseList) {
    //     //     arr.push(<ExpenseItem expense={ex} />);
    //     // }
    //     // return arr;
    //
    //     // mapping을 하는 것과 같은 함수
    //     return expenseList.map(ex => <ExpenseItem expense={ex} />);
    // };
    // 화살표 함수로 리팩토링
    // const foo = () => expenseList.map(ex => <ExpenseItem expense={ex} />);

    return (
        // <div className='expenses'>
        <Card className='expenses'>
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

            <ExpenseFilter onChangeFilter={onFilterChange} />

            {/*<ExpenseItem expense={expenseList[0]} />*/}
            {/*<ExpenseItem expense={expenseList[1]} />*/}
            {/*<ExpenseItem expense={expenseList[2]} />*/}

            {/*동적 리스트 랜더링: 객체 안에 배열을 넣어서 그대로 랜더링도 가능하다*/}
            {
                // [
                //     <p>Hi</p>
                //     , <span>Hello</span>
                //     , <h3>Bye</h3>
                // ]

                // foo()

                // 직접 함수를 안에 넣는 것도 가능하다.
                // expenseList.map(ex => <ExpenseItem expense={ex} />)

                expenseList
                    .filter(ex => ex.date.getFullYear().toString() === year)
                    // map으로 동적 리스트 렌더링을 할 때 key 값을 넣어줘야 한다. 벡앤드에서 오는 pk 값으로 설정하면 된다
                    .map(ex => <ExpenseItem key={Math.random().toString()} expense={ex} />)
            }
        </Card>
        // </div>
    );
};

export default ExpenseList;