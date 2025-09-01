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
    const increaseHandler = () => setCount(count + 1);

    // const decreaseHandler = () => {
    //     return --count;
    // };
    const decreaseHandler = () => setCount(count - 1);

    return (
        <div>
            <h1>숫자: { count }</h1>
            <button onClick={increaseHandler}>증가</button>
            <button onClick={decreaseHandler}>감소</button>
        </div>
    );
};

export default Counter;