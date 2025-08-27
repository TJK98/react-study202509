import React from "react";
import Hello from "./components/Hello.jsx"; // 컴포넌트 폴더 안에 있는 Hello.jsx 불러오기
import Bye from "./components/Bye" // 리액트에서는 확장자 생략 가능, 바닐라 자바 스크립트에서는 불가능

/*
    jsx : 리액트에서 사용하는 특수한 js문법, 태그를 그대로 쓰면 알아서 변환

    - 규칙 :
    1. return안에있는 태그는 반드시 하나의 태그로 묶여야 함.
    2. 빈 태그(닫는 태그가 없는)는 반드시 /> 로 마감
    3. 태그의 class속성은 자바스크립트 키워드 class와 겹쳐서 className으로 표기
    4. 의미없는 부모는 <React.Fragment>로 감싸면 됨
    5. 변수값이나 함수를 출력할 때는 {}로 감싸면 됨.
*/

function App() {

    const $h1 = <h1 className="title">안녕 리액트!</h1>; // jsx의 특수 문법, 리액트에선 class는 className이라고 써야 된다. 실제로 랜더링 될 때는 class로 된다.

    const text = `Vanilla Javascript!`;

    // return 하면 main.jsx로 리턴 된다.
    // return 되는 데이터는 하나여야 한다. 하나의 태그 <div></div>로 묶어주고 전체를 () 소괄호로 묶어줘야 한다. return에는 소괄호를 치고 시작하는 걸 권고
    // 필요없는 div는 <>로 비워두면 된다. 불필요한 div가 랜더링 되지 않는다.
    return (
        //<div>
        // <> 문법 때문에 어쩔 수 없이 하나로 감싸야 돼서 쓴 Fragment
        <>
            {/*new Hello()가 아닌*/}
            <Hello />
            <Bye />
            <Hello />
        </>
        //</div>
    )
        ;
}

export default App;