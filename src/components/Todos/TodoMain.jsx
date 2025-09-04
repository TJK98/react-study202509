import React from 'react';

import styles from './scss/TodoMain.module.scss';
import TodoItem from './TodoItem';

const TodoMain = ({items, onDelete, onCheck}) => {
    return (
        <ul className={styles['todo-list']}>
            {/*map을 돌릴 때 항상 key를 준다고 생각하면 된다.*/}
            {items.map(todo => <TodoItem key={todo.id} item={todo} onDelete={onDelete} onCheck={onCheck} />)}
        </ul>
    );
};

export default TodoMain;
