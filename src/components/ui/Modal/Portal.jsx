import React from 'react';
import ReactDOM from "react-dom";

const Portal = ({children, destId}) => {
    return ReactDOM.createPortal (
        // <div></div>, 컴포넌트를 props로 받을 때는 children을 사용하면 된다.
        children,
        document.getElementById(destId)
    );
};

export default Portal;