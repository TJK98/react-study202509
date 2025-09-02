import React from 'react';

import './ChartBar.css';

// 1개 월에 대한 막대 그래프 정보
const ChartBar = ({label, currentMonthValue, totalValue}) => {

    // 월별 지출액 비율 구하기 - 해달 월의 지출액(currentMonthValue) / 해당 년도의 총 지출액
    let barFillHeight = `0%`;

    if (totalValue > 0) {
        const percentage = (currentMonthValue / totalValue) * 100;
        barFillHeight = percentage + `%`;
    }

    return (
        <div className="chart-bar">
            <div className="chart-bar__inner">
                {/*인라인 스타일 넣을 때 객체로 감싸서 넣는다.*/}
                <div className="chart-bar__fill" style={{height: barFillHeight}}></div>
            </div>
            <div className="chart-bar__label">{label}</div>
        </div>
    );
};

export default ChartBar;