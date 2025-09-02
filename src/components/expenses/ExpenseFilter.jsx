import React from 'react';
import './ExpenseFilter.css';

const ExpenseFilter = ({ onChangeFilter }) => {

    // onChangeFilter는 연도 선택을 완료 했을 때 즉 changeYearHandler 이벤트가 터졌을 때 onChangeFilter가 적용 되어야 한다.
    const changeYearHandler = e => {
        onChangeFilter(e.target.value);
    };

    return (
        <div className='expenses-filter'>
            <div className='expenses-filter__control'>
                <label>Filter by year</label>
                <select onChange={changeYearHandler}>
                    <option value='2025'>2025</option>
                    <option value='2024'>2024</option>
                    <option value='2023'>2023</option>
                    <option value='2022'>2022</option>
                    <option value='2021'>2021</option>
                    <option value='2020'>2020</option>
                    <option value='2019'>2019</option>
                </select>
            </div>
        </div>
    );
};

export default ExpenseFilter;
