import React, {useState} from 'react';
import './CourseInput.css';
import Button from '../ui/Button';

const CourseInput = ({onAdd}) => {

    // 목표 input에 입력한 상태 관리
    const [enteredText, setEnteredText] = useState(``);

    const submitHandler = e => {
        // onSubmit인 submit 이벤트의 새로고침 막기
        e.preventDefault();
        console.log(`입력값: ${enteredText}`);

        onAdd(enteredText);

        // 입력값 비우기
        setEnteredText(``);
    };

    return (
        <form onSubmit={submitHandler}>
            <div className="form-control">
                <label>나의 목표</label>
                <input
                    type="text"
                    onInput={e => setEnteredText(e.target.value)}
                    value={enteredText} // 양방향 매핑
                />
            </div>
            <Button type="submit">목표 추가하기</Button>
        </form>
    );
};

export default CourseInput;
