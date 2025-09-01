import React from "react";
import ExpenseItem from "./components/expenses/ExpenseItem.jsx";
import ExpenseList from "./components/expenses/ExpenseList.jsx";
import Card from "./components/ui/Card.jsx";
import Counter from "./components/Counter.jsx";
import NewExpense from "./components/new-expense/NewExpense.jsx";

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

            {/*<Counter />*/}

            <NewExpense />
            <ExpenseList expenses={expenseList} />

            {/*태그를 전달하고 싶을 때는 컴포넌트 열고 닫아서 사이에 태그를 넣는다. props의 child*/}
            {/*<Card>*/}
            {/*    <h2>여름 카드</h2>*/}
            {/*    <img src="https://cdn.travie.com/news/photo/202505/54296_39721_226.jpg" alt=""/>*/}
            {/*</Card>*/}

            {/*<Card>*/}
            {/*    <h2>겨울 카드</h2>*/}
            {/*    <p>winter</p>*/}
            {/*    <a href="#">링크 이동</a>*/}
            {/*</Card>*/}
        </>
    );
};

export default App;