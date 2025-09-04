import React from 'react';
import Card from '../Card';
import Button from '../Button';
import styles from './ErrorModal.module.css';

// portal을 사용하기 위한 import
import ReactDOM from 'react-dom';
import Portal from "./Portal.jsx";

// 컴포넌트 안에 컴포넌트 여러 개 생성 가능
const Backdrop = ({onClose}) => {
    return <div className={styles.backdrop} onClick={onClose}></div>
}

const ModalOverlay = ({title, message, onClose}) => {
    return (
        <Card className={styles.modal}>
            <header className={styles.header}>
                <h2>{title}</h2>
            </header>
            <div className={styles.content}>
                <p>{message}</p>
            </div>
            <footer className={styles.actions}>
                <Button onClick={onClose}>Okay</Button>
            </footer>
        </Card>
    )
}

const ErrorModal = ({ title, message, onClose }) => {
    return (
        <>
            {/*{*/}
            {/*    // <div className={styles.backdrop} onClick={onClose}></div>를 portal에 태워서 index.html의 document.getElementById(`backdrop-root`)로 보낸다.*/}
            {/*    ReactDOM.createPortal(*/}
            {/*        <Backdrop onClose={onClose} />,*/}
            {/*        document.getElementById(`backdrop-root`)*/}
            {/*    )*/}
            {/*}*/}

            {/*{*/}
            {/*    ReactDOM.createPortal(*/}
            {/*        <ModalOverlay title={title} message={message} onClose={onClose} />,*/}
            {/*        document.getElementById(`modal-overlay-root`)*/}
            {/*    )*/}
            {/*}*/}

            {/*/!*<div className={styles.backdrop} onClick={onClose}></div>*!/*/}
            {/*/!*<Card className={styles.modal}>*!/*/}
            {/*/!*    <header className={styles.header}>*!/*/}
            {/*/!*        <h2>{title}</h2>*!/*/}
            {/*/!*    </header>*!/*/}
            {/*/!*    <div className={styles.content}>*!/*/}
            {/*/!*        <p>{message}</p>*!/*/}
            {/*/!*    </div>*!/*/}
            {/*/!*    <footer className={styles.actions}>*!/*/}
            {/*/!*        <Button onClick={onClose}>Okay</Button>*!/*/}
            {/*/!*    </footer>*!/*/}
            {/*/!*</Card>*!/*/}

            {/*Portal.jsx를 이용한 ErrorModal 제어*/}
            <Portal destId='backdrop-root'>
                <Backdrop onClose={onClose} />
            </Portal>

            <Portal destId='modal-overlay-root'>
                <ModalOverlay title={title} message={message} onClose={onClose} />
            </Portal>
        </>
    );
};

export default ErrorModal;
