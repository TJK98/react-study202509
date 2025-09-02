import React, {useState} from 'react';
import './NewExpense.css';
import ExpenseForm from './ExpenseForm';

const NewExpense = ({ onSave }) => {

    // 화면 상태를 제어하기 위한 논리 상태 변수
    const [toggle, setToggle] = useState(false);

    const formComponent = <ExpenseForm onAdd={onSave} onCancel={() => setToggle(false)} />;
    const buttonComponent = <button onClick={() => setToggle(true)}>새로운 지출 추가하기</button>;

    return (
        <div className='new-expense'>
            {/*함수 이름을 굳이 바꿔주지 않아도 된다.*/}
            {/*<ExpenseForm onAdd={onSave} />*/}
            { toggle ? formComponent : buttonComponent }
        </div>
    );
};

export default NewExpense;
