import React, {useState} from "react";
import CourseInput from "./components/CourseGoals/CourseInput.jsx";
import CourseList from "./components/CourseGoals/CourseList.jsx";
import './App.css';

// 리액트의 props의 한계점 : 단방향이다. (위에서 아래로) 그래서 서버에서 날라오는 데이터들은 위에서 처리하는 게 좋다.
const App = () => {

    // 목표데이터들의 묶음배열
    const [goals, setGoals] = useState([
        {
            id: 'g1',
            text: '테스트 데이터1',
        },
        {
            id: 'g2',
            text: '테스트 데이터2',
        },
    ]);

    // 데이터 끌어올리기용 함수
    const onAddGoal = (text) => {
        const newGoal = {
            id: Math.random().toString(),
            text: text
        };
        setGoals(prev => [...prev, newGoal])
    };

    // 데이터 삭제용 함수
    const onDeleteGoal = (targetId) => {

        // // 상태 배열을 관리하기 위해 복사 배열 생성
        // const copyGoals = [...goals];
        //
        // // targetId에 해당하는 객체를 배열 안에서 탐색한 후 제거
        // let index = -1;
        // for (let i = 0; i < copyGoals.length; i++) {
        //     if (copyGoals[i].id === targetId) {
        //         index = i;
        //         break;
        //     }
        // }
        //
        // // if (index !== -1) copyGoals.splice(index, 1) // goals는 상태 배열이기 때문에 이렇게 하면 안 된다.
        // if (index !== -1) {
        //     copyGoals.splice(index, 1)
        //     setGoals(copyGoals);
        // }

        // 단 한줄의 코드로 작성이 가능하다.
        setGoals(goals.filter(g => g.id !== targetId));
    }

    return (
        <div>
            <section id='goal-form'>
                <CourseInput onAdd={onAddGoal} />
            </section>
            <section id='goals'>
                <CourseList items={goals} onDelete={onDeleteGoal} />
            </section>
        </div>
    );
};

export default App;