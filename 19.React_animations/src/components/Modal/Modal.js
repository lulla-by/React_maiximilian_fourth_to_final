import React from "react";
import { CSSTransition } from 'react-transition-group';


import "./Modal.css";

const animationTiming = {
  enter: 400, // 요소를 나타내는데 걸리는 ㄴ시간
  exit: 1000 // 요소를 사라지게하는데 걸리는 시간
}
const modal = (props) => {

  return (
    <CSSTransition
      mountOnEnter
      unmountOnExit
      in={props.show}
      timeout={animationTiming}
      // CSSTransition컴포넌트를 통해 css 클래스를 순회 
      // fade-slide라는 몸통을 설정해주면 해당 클래스를 순회함
      // classNames="fade-slide"
      // 클래스 이름 사용자 정의, 객체를 전달하여 다양한 css클래스들을 수동으로 정의
      classNames={{
        enter:"",
        enterActive:"ModalOpen",
        exit:"",
        exitActive:"ModalClosed"
      }}
      >
      <div className="Modal">
        <h1>A Modal</h1>
        <button className="Button" onClick={props.closed}>
          Dismiss
        </button>
      </div>
    </CSSTransition>
  );
};

export default modal;
