import React from "react";
import Transition from "react-transition-group/Transition"


import "./Modal.css";

const animationTiming = {
  enter: 400, // 요소를 나타내는데 걸리는 ㄴ시간
  exit: 1000 // 요소를 사라지게하는데 걸리는 시간
}
const modal = (props) => {

  return (
    <Transition in={props.show}
      timeout={animationTiming}
      mountOnEnter
      unmountOnExit>
      {state => {
        const cssClasses = [
          "Modal",
          state === "entering" ? "ModalOpen" : state === "exiting" ? "ModalClosed" : null
        ];
        return (
          <div className={cssClasses.join(" ")}>
            <h1>A Modal</h1>
            <button className="Button" onClick={props.closed}>
              Dismiss
            </button>
          </div>
        )
      }}
    </Transition>
  );
};

export default modal;
