import React from "react";
import classes from "./Input.module.css";

  // ref를 받고싶은 컴포넌트(<Input/>)으로 가서 컴포넌트 함수를 React.forwardRef로 감싸야함
export const Input = React.forwardRef((props,ref) => {
  return (
    <div className={classes.input}>
      <label htmlFor={props.input.id}>{props.label}</label>
      {/* props.input에서 받을 수도 있는 다른 모든 구성 데이터를  input요소에 프롭으로 전달하기 위해서*/}
      <input ref={ref} defaultValue={props.input.basic} {...props.input} />
      {/* forwardRef로 감싼뒤 ref를 인자로 받아서 input의 ref로 할당하여 접근 */}
    </div>
  );
});
