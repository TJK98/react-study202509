import React, {useState} from 'react';

const Counter = () => {

    // let count = 10;

    // 실제로 화면에 관여하는 데이터는 useState를 사용해야 된다.
    const [count, setCount] = useState(10);

    // const increaseHandler = () => {
    //     // 로그에는 실제로 값이 올라가지만 화면에 랜더링이 되진 않는다.
    //     console.log(`count: ${count}`);
    //     return ++count;
    // };
    const increaseHandler = () => {
        // 비동기 시작을 하여 동시에 시작하여 +2가 아닌 따로 + 1로 시작한다.
        // setCount(count + 1);
        // setCount(count + 1);

        // 동시성 문제 해결을 하기 위해 함수 투입을 가능하게 한다. 기존 값을 파라미터로 넘겨주기 가능.
        // 이렇게 하면 +2 가 된다.
        setCount((prev) => {
            console.log(`prev: `, prev);
            // 다음 값을 리턴
            return prev + 1;
        })
        setCount(prev => prev + 1);
    };

    // const decreaseHandler = () => {
    //     return --count;
    // };
    const decreaseHandler = () => {
        setCount(count - 1);
    };

    return (
        <div>
            <h1>숫자: { count }</h1>
            <button onClick={increaseHandler}>증가</button>
            <button onClick={decreaseHandler}>감소</button>
        </div>
    );
};

export default Counter;