import React from "react";
import ExpenseItem from "./components/expenses/ExpenseItem.jsx";

const App = () => (
    <>
        <ExpenseItem
            title='피자'
            price={20000}
            date={new Date(2025, 7, 13)}
        /> {/*문자열만 {} 생략 가능, 마치 함수에게 파라미터를 전달하는 효과*/}
        <ExpenseItem
            title='치킨'
            price={18000}
            date={new Date(2025, 8, 7)}
        />
        <ExpenseItem
            title='간짜장'
            price={9000}
            date={new Date(2025, 1, 19)}
        />
    </>
);

export default App;