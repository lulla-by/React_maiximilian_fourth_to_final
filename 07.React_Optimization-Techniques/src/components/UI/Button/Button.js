import React from 'react';

import classes from './Button.module.css';

const Button = (props) => {
  // React.memo로 감싸고 프롭스로 받는 함수(toggleParagraph)와 children모두 같지만 재평가가 이루어짐 왜일까
  // 매우 흔한 오류 중 하나
  // 자바스크립트에서는 app함수가 실행될때마다 만들어지는 함수는 모두 새로운 함수!
  // 그렇다면 왜 DemoOutput에서는 작동하고 여기스ㅓ는 왜 안작동하는가...

  // DemoOutput에서 props로 받는 false는 boolean타입으로 원시값임
  // React.memo는 사실상 이전의 값과 현재의 값을 비교하는 것으로 
  // 원시값인 false === false  => true가 나옴
  
  // 하지만 배열이나 객체, 함수를 비교하면 말이 달라짐
  // [1,2,3] === [1,2,3]  => false

  // 여기에서는 React.memo를 통해
  // props.onclick === props.previous.onClick  => false

  console.log("4. Button Running")
  return (
    <button
      type={props.type || 'button'}
      className={`${classes.button} ${props.className}`}
      onClick={props.onClick}
      disabled={props.disabled}
    >
      {props.children}
    </button>
  );
};

export default React.memo(Button);
