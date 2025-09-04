import React, {useState} from 'react';
import { MdAdd } from 'react-icons/md';

import styles from './scss/TodoInput.module.scss';

const TodoInput = ({onAdd}) => {

    const {
        'form-wrapper': wrapper,
        'insert-form': insertForm,
        'insert-btn': insertBtn,
        open: openStyle,
    } = styles;

    // form toggling -> 버튼을 누르면 논리값을 뒤집어서 보이거나 보이지 않게 한다.
    const [toggle, setToggle] = useState(false);
    
    // 할 일 입력 상태 관리
    const [enteredText, setEnteredText] = useState(``);

    const submitHandler = e => {
        // 새로 고침 방지
        e.preventDefault();
        // console.log(enteredText);

        onAdd(enteredText);

        // 입력이 끝난 뒤 비워주기
        setEnteredText(``);
    }

    return (
        <>
            {toggle && <div className={wrapper}>
                {/*form 태그의 특징 하나는 form 태그 안에 button이 존재 하지 않으면 input에서 엔터를 누른 걸로 submit 이벤트 발동*/}
                <form className={insertForm} onSubmit={submitHandler}>
                    <input
                        type="text"
                        placeholder="할 일을 입력 후, 엔터를 누르세요!"
                        value={enteredText}
                        onInput={e => setEnteredText(e.target.value)}
                    />
                </form>
            </div>}
            <button
                className={`${insertBtn} ${toggle ? openStyle : ''}`}
                onClick={() => setToggle(!toggle)}
            >
                <MdAdd />
            </button>
        </>
    );
};

export default TodoInput;
