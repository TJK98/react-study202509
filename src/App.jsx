import React from 'react';
import './App.css';
import TodoTemplate from './components/Todos/TodoTemplate.jsx';

// 리액트의 props의 한계점 : 단방향이다. (위에서 아래로) 그래서 서버에서 날라오는 데이터들은 위에서 처리하는 게 좋다.
const App = () => {

    return <TodoTemplate />
};

export default App;