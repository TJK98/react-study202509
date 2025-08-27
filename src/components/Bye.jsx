// import React from "react"; <- 리액트 구버전에서는 필수, 하지만 요즘 방식인 함수형 컴포넌트에서는 생략 가능

// 함수형 컴포넌트 : 최신 방식
import Fruit from "./Fruit.jsx";

function Bye() {

    return (
        <div>
            <a href="http://google.com">구글로 이동</a>
            <Fruit /> {/*서브 컴포넌트에 서브 컴포넌트 넣기 가능*/}
        </div>
    );
}

export default Bye;