import React, {useState} from 'react';
import './App.css';
import AddUsers from "./components/Users/AddUsers.jsx";
import UserList from "./components/Users/UserList.jsx";

// 리액트의 props의 한계점 : 단방향이다. (위에서 아래로) 그래서 서버에서 날라오는 데이터들은 위에서 처리하는 게 좋다.
const App = () => {

    // 회원들이 저장될 배열
    const [userList, setUserList] = useState([]);

    // 입력한 회원정보를 가져오는 함수
    const addUserInfo = (user) => {
        setUserList([...userList, user]);
    };

    return (
        <>
            <AddUsers onAddUser={addUserInfo} />
            <UserList users={userList} />
        </>
    )
};

export default App;