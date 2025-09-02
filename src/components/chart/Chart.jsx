import React from 'react';
import ChartBar from './ChartBar';
import './Chart.css';

const Chart = ({dataPoints}) => {

    // 해당 년도의 총 지출액 구하기
    // const getTotalValue = () => {
    //     let total = 0;
    //     for (const dp of dataPoints) {
    //         total += dp.value;
    //     }
    //     return total;
    // };
    // const totalValue = getTotalValue();
    const totalValue = dataPoints.reduce((acc, dp) => acc + dp.value, 0);

    return (
        <div className="chart">
            {/*<ChartBar label={dataPoints[0].label} />*/}
            {/*<ChartBar label={dataPoints[1].label} />*/}
            {/*<ChartBar />*/}
            {/*<ChartBar />*/}
            {/*<ChartBar />*/}
            {/*<ChartBar />*/}
            {/*<ChartBar />*/}
            {/*<ChartBar />*/}
            {/*<ChartBar />*/}
            {/*<ChartBar />*/}
            {/*<ChartBar />*/}
            {/*<ChartBar />*/}
            {
                dataPoints.map(dp =>
                    <ChartBar
                        key={dp.label}
                        label={dp.label}
                        currentMonthValue={dp.value}
                        totalValue={totalValue}
                    />)
            }
        </div>
    );
};

export default Chart;
