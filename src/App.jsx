import React from "react";
import ExpenseItem from "./components/expenses/ExpenseItem.jsx";
import ExpenseList from "./components/expenses/ExpenseList.jsx";

// 리액트의 props의 한계점 : 단방향이다. (위에서 아래로) 그래서 서버에서 날라오는 데이터들은 위에서 처리하는 게 좋다.
const App = () => {
    const expenseList = [
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
    ];

    return (
        <>
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

            <ExpenseList expenses={expenseList} />
        </>
    );
};

export default App;