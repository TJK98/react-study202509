import React from 'react';
import './Card.css';

const Card = ({children, className = ``}/*props*/) => {

    // <Card children={}> <- 이렇게 보내지 않아도 children이 생성이 되고 배열로 보내진다.
    // console.log(`props: `, props);

    // 태그를 가변적으로 처리할 때 children을 쓴다.
    return (
        // 기본적인 디자인 클래스는 card, 커스텀 디자인 클래스는 className
        <div className={`card ${className}`}>
            {/*<h2>크리스마스 카드</h2>*/}
            {/*<p>메리 크리스마스</p>*/}
            {/*<span>더보기</span>*/}
            {/*{props.children}*/}
            {children}
        </div>
    );
};

export default Card;