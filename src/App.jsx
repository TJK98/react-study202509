import React, {useState} from 'react';
import './App.css';
import AddUsers from "./components/Users/AddUsers.jsx";
import UserList from "./components/Users/UserList.jsx";
import MainHeader from "./components/SideEffect/MainHeader.jsx";
import Home from "./components/SideEffect/Home.jsx";
import Login from "./components/SideEffect/Login.jsx";

// 리액트의 props의 한계점 : 단방향이다. (위에서 아래로) 그래서 서버에서 날라오는 데이터들은 위에서 처리하는 게 좋다.
const App = () => {

    return (
        <>
            <MainHeader/>
            <main>
                <Home />
                <Login />
            </main>
        </>
    );
};

export default App;