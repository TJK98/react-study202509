import React, {useEffect, useState} from 'react';
import './App.css';
import AddUsers from "./components/Users/AddUsers.jsx";
import UserList from "./components/Users/UserList.jsx";
import MainHeader from "./components/SideEffect/MainHeader.jsx";
import Home from "./components/SideEffect/Home.jsx";
import Login from "./components/SideEffect/Login.jsx";

// 리액트의 props의 한계점 : 단방향이다. (위에서 아래로) 그래서 서버에서 날라오는 데이터들은 위에서 처리하는 게 좋다.
const App = () => {

    // 로그인 상태 체크
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    // 토큰 검사
    // console.log(`토큰 검사`);
    // const token = localStorage.getItem(`token`)
    // if (token === `1`) {
    //     setIsLoggedIn(true); // 리렌더링 발생
    // }

    // side effect (서버에서 데이트를 가져오거나 외부 비동기 작업) 처리를 위한 훅(리액트 함수)
    useEffect(() => {
        console.log(`useEffect 실행`);

        // 리랜더링 되어 발생하는 무한 로딩에 대한 로직을 useEffect에 넣으면 된다.
        const token = localStorage.getItem(`token`)
        if (token === `1`) {
            setIsLoggedIn(true); // 리렌더링 발생
        }
    },[]);

    const handleLogin = (email, password) => {

        // 로그인 검증
        if (email === `abc@def.com` && password === `12345678`) {
            localStorage.setItem(`token`, `1`);
            setIsLoggedIn(true);
        } else {
            alert(`로그인 실패`);
        }
    };

    // console.log(`랜더링 수행`);

    const handleLogout = () => {
      localStorage.removeItem(`token`);
      setIsLoggedIn(false);
    };

    return (
        <>
            <MainHeader onLogout={handleLogout}/>
            <main>
                {isLoggedIn && <Home/>}
                {!isLoggedIn && <Login onLogin={handleLogin}/>}
            </main>
        </>
    );
};

export default App;