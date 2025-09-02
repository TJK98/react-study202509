import React from "react";
import ExpenseList from "./components/expenses/ExpenseList.jsx";
import NewExpense from "./components/new-expense/NewExpense.jsx";

// 리액트의 props의 한계점 : 단방향이다. (위에서 아래로) 그래서 서버에서 날라오는 데이터들은 위에서 처리하는 게 좋다.
const App = () => {
    const expenseList = [
        {
            title: `피자`,
            price: 20000,
            date: new Date(2022, 7, 13)
        },
        {
            title: `치킨`,
            price: 18000,
            date: new Date(2023, 8, 7)
        },
        {
            title: `간짜장`,
            price: 9000,
            date: new Date(2024, 1, 19)
        },
        {
            title: `햄버거`,
            price: 6000,
            date: new Date(2025, 1, 19)
        },
    ];

    // 상향식 데이터 전달을 위해 하위 컴포넌트에게 함수 하나를 내려준다.
    // App.jsx -> ExpenseForm.jsx 에게 함수를 주려면 한 번에 바로 주지 못 하고 컴포넌트 순서를 타고 가야한다.
    // App.jsx -> NewExpense.jsx -> ExpenseForm.jsx 순서로 가야 한다. (컴포넌트 순서대로)
    // 리액트에선 함수에 on~~~ 을 붙여서 사용한다. 앞에 on 이 붙으면 함수
    const onAddExpense = (userInput) => {
        console.log(`상향식 데이터 전달 함수`);
        console.log(`하위 컴포넌트에게서 전달 된 데이터: `, userInput);
        expenseList.push(userInput);
        console.log(expenseList);
    }

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

            {/*<CheckBoxStyle />*/}

            {/*함수를 호출하면 안 되고 함수 자체를 내려줘야 한다.*/}
            <NewExpense onSave={onAddExpense}/>

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