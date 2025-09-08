import React, {useRef, useState} from 'react';
import styles from './AddUsers.module.css';
import Card from '../ui/Card';
import Button from '../ui/Button';
import ErrorModal from "../ui/Modal/ErrorModal.jsx";

const AddUsers = ({onAddUser}) => {

    // 입력값들을 상태관리
    // const [userValue, setUserValue] = useState({
    //     username: '',
    //     age: '',
    // });

    // useRef로 태그 기억시키기
    const usernameRef = useRef()
    const ageRef = useRef()

    // 에러가 났을 때 에러 데이터를 관리할 상태 변수
    // error -> { title: 에러 제목, message : 에러 원인 }
    const [error, setError] = useState(null);

    // 실시간으로 상태 관리를 하지 않고 태그를 기억하기 때문에 .value로 바로 꺼낼 수 있다.
    // const handleName = (e) => {
    //     setUserValue({
    //         ...userValue,
    //         username: e.target.value,
    //     });
    // };
    // const handleAge = (e) => {
    //     setUserValue({
    //         ...userValue,
    //         age: e.target.value,
    //     });
    // };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        // input 태그 꺼내기
        const $usernamdInput = usernameRef.current;
        const $ageInput = ageRef.current;

        const userValue = {
            username: $usernamdInput.value,
            age: $ageInput.value
        }

        // 입력값 검증
        if (!userValue.username.trim()) {
            // 에러 처리
            setError({
                title: `유효하지 않은 입력값`,
                message: `이름은 필수 입력값 입니다.`
            })
            return;
        }

        if (+userValue.age < 1) {
            // 에러 처리
            setError({
                title: `유효하지 않은 나이 범위`,
                message: `나이는 0또는 음수가 될 수 없습니다.`
            })
            return;
        }

        onAddUser({
            ...userValue,
            id: Math.random().toString(),
        });

        // setUserValue({
        //     username: '',
        //     age: '',
        // });
        $usernamdInput.value = ``;
        $ageInput.value = ``;

        $usernamdInput.focus();
    };

    return (
        <>
            {error && <ErrorModal title={error.title} message={error.message} onClose={() => setError(null)} />}
            <Card className={styles.input}>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="username">이름</label>
                    <input
                        id="username"
                        type="text"
                        ref={usernameRef}
                        // value={userValue.username}
                        // onInput={handleName}
                    />
                    <label htmlFor="age">나이</label>
                    <input
                        id="age"
                        type="number"
                        ref={ageRef}
                        // value={userValue.age}
                        // onInput={handleAge}
                    />
                    <Button type="submit">가입하기</Button>
                </form>
            </Card>
        </>
    );
};

export default AddUsers;
