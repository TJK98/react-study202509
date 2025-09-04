import React, {useState} from 'react';
import './CourseInput.css';
import Button from '../ui/Button';

const CourseInput = ({onAdd}) => {

    // 목표 input에 입력한 상태 관리
    const [enteredText, setEnteredText] = useState(``);

    // 입력값에 오류가 있는지 여부를 상태 관리
    // 초기값을 false가 아닌 null로 주는 이유는 사용자가 아무런 입력을 하지 않았어도 false가 뜰 수 있기 때문에 null로 줘야 한다.
    const [isValid, setIsValid] = useState(null);

    const submitHandler = e => {
        // onSubmit인 submit 이벤트의 새로고침 막기
        e.preventDefault();

        // 입력값 검증
        if (!enteredText.trim()) {
            setIsValid(false);
            return;
        }

        // console.log(`입력값: ${enteredText}`);

        onAdd(enteredText);

        // 입력값 비우기
        setEnteredText(``);

        setIsValid(true);
    };

    const goalInputHandler = e => {
        const inputValue = e.target.value;

        // 입력값 검증
        if (inputValue.trim()) {
            setIsValid(true);
        }

        return setEnteredText(inputValue);
    };

    return (
        <form onSubmit={submitHandler}>
            {/*null도 false 취급이 되기 때문에 false 일 때만을 명시해줘야 된다.*/}
            <div className={`form-control ${isValid === false ? 'invalid' : ''}`}>
                {/*null도 false 취급이 되기 때문에 false 일 때만을 명시해줘야 된다.*/}
                <label
                    // style={{color: isValid !== false ? "black" : "red"}}
                >나의 목표</label>
                <input
                    type="text"
                    onInput={goalInputHandler}
                    value={enteredText} // 양방향 매핑
                    // style={{
                    //     background: isValid !== false ? 'transparent' : 'salmon', // null도 false 취급이 되기 때문에 false 일 때만을 명시해줘야 된다.
                    //     borderColor: isValid !== false ? 'black' : 'red' // null도 false 취급이 되기 때문에 false 일 때만을 명시해줘야 된다.
                    // }}
                />
            </div>
            <Button type="submit">목표 추가하기</Button>
        </form>
    );
};

export default CourseInput;
