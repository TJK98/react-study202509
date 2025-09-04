import React from 'react';
// import './CourseList.css'; // CSS Module로 리팩토링
import styles from './CourseList.module.css';
import CourseItem from './CourseItem';

const CourseList = ({items, onDelete}) => {

    // console.log(styles);
    // styles는 객체, 객체의 키 값은 css가 적용 되는 클래스 이름과 랜덤 문자가 결합된 형태

    return (
        // <ul className='goal-list'>

        // - 대시가 있기 때문에 객체로 받아와야 한다.
        <ul className={styles['goal-list']}>
            {items.map(item => <CourseItem key={item.id} item={item} onDelete={onDelete} />)}
            {/*<CourseItem />*/}
            {/*<CourseItem />*/}
            {/*<CourseItem />*/}
        </ul>
    );
};

export default CourseList;
