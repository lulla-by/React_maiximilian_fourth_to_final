import React from "react";
import classes from "./Input.module.css";

export const Input = (props) => {
  return (
    <div className={classes.input}>
      <label htmlFor={props.input.id}>{props.label}</label>
      {/* props.input에서 받을 수도 있는 다른 모든 구성 데이터를  input요소에 프롭으로 전달하기 위해서*/}
      <input defaultValue={props.input.basic} {...props.input} />
    </div>
  );
};
