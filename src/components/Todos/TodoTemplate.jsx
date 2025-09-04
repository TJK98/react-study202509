import React, {useState} from 'react';
import TodoHeader from './TodoHeader';
import styles from './scss/TodoTemplate.module.scss';
import TodoMain from './TodoMain';
import TodoInput from './TodoInput';
import {TODOS} from "./dummy-data/DUMMY_TODOS.js";

const TodoTemplate = () => {

    // api 콜은 상단부 최대한 위에서 하는 게 좋다.
    const [todos, setTodos] = useState(TODOS);

    const addTodo = (title) => {
        const newTodo = {
            id: Math.random().toString(),
            title,
            done: false
        }
        setTodos(prev => [...prev, newTodo])
    };

    const removeTodo = id => {
        // console.log(id);
        setTodos(prevTodos => prevTodos.filter(todo => todo.id !== id));
    }

    const checkTodo = id => {
        // // 사본 만들기
        // const copyTodos = [...todos];
        //
        // // id로 done의 값을 변경할 객체를 탐색한 후 논리값 반전
        // const targetTodo = copyTodos.find(todo => todo.id === id);
        //
        // targetTodo.done = !targetTodo.done
        // console.log(targetTodo);
        //
        // setTodos(copyTodos);

        // map이 돌아가가면 알아서 새로운 배열에 놓는다.
        setTodos(prevTodos => prevTodos.map(todo =>
            todo.id === id
                ? {...todo, done: !todo.done}
                : todo
        ))
    };

    // 남은 할 일 개수 구하기
    const countRestTodo = todos.filter(todo => !todo.done).length;

    return (
        <div className={styles.TodoTemplate}>
            <TodoHeader count={countRestTodo} />
            <TodoMain items={todos} onDelete={removeTodo} onCheck={checkTodo} />
            <TodoInput onAdd={addTodo} />
        </div>
    );
};

export default TodoTemplate;
