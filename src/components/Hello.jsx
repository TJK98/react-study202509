// 컴포넌트의 특징 : 첫 글자가 대문자, js, jsx 둘 다 작동
// 클래스 컴포넌트 : 옛날 방식

import React from "react";

// 태그를 모듈화 시켜서 반복적인 태그 처리 가능
class Hello extends React.Component {

    render() {
        return (
            <>
                <h1>Hi</h1>
                <h2>Hello</h2>
            </>
        );
    }
}

export default Hello; // 클래스 내보내기