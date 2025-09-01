import React, { useState } from 'react';
import './CheckBoxStyle.css';

const CheckBoxStyle = () => {

    // usestate() -> () 안에 값을 넣으면 초기값 세팅 가능
    const [isChecked, setIsChecked] = useState(false);

    // console.log(isChecked);

    /*
      1. input[checkbox]에 change이벤트가 걸려서
      2. check상태가 바뀔 때마다 상태변수를 논리값으로 업데이트하여
      3. label의 클래스를 유동적으로 변경해야함.
    */

    // let className;

    const changeHandler = e => {
        // console.log(`check`);
        // console.log(e.target.checked);

        // 누를 때마다 논리값 뒤집기
        // setter가 발동 되면 함수가 재시작 된다. 지역 변수들은 초기값으로 되돌아간다.
        setIsChecked(!isChecked);

        // 여기서 아무리 isChecked으로 className을 바꿔도 <label className={ className } htmlFor='styled-checkbox'>Check me!</label>에 반영이 되지 않는다.
        // className은 상태 변수가가 아니고 지역 변수기 때문에 리랜더링을 실행 하면서 다시 초기값으로 되돌아간다.
        // if (isChecked) {
        //     className = `checked`;
        // } else {
        //     className = `unchecked`;
        // }
    };

    return (
        <div className='checkbox-container'>
            <input
                type='checkbox'
                id='styled-checkbox'
                onChange={changeHandler}
            />
            {/*label의 for와 input의 id와 연결할 수 있다. 텍스트를 눌러도 체크가 가능하다.*/}
            {/*즉시 랜더링에 반영해야 된다.*/}
            <label className={isChecked ? `checked` : `unchecked`} htmlFor='styled-checkbox'>Check me!</label>
        </div>
    );
};

export default CheckBoxStyle;