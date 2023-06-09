import React from "react";
import ReactDom from 'react-dom'
import Card from "./Card";
import Button from "./Button";
import classes from "./ErrorModal.module.css";

const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.errorHandeler}></div>;
};
const ModalOveraly = (props) => {
  return (
    <Card className={classes.modal}>
      <header className={classes.header}>
        <h2>{props.title}</h2>
      </header>
      <div className={classes.content}>
        <p>{props.message}</p>
      </div>
      <footer className={classes.actions}>
        <Button onClick={props.errorHandeler}>Okay</Button>
      </footer>
    </Card>
  );
};
const ErrorModal = (props) => {
  return (
    <React.Fragment>
      {ReactDom.createPortal(<Backdrop errorHandeler={props.errorHandeler}/>,document.getElementById('backdrop-root'))}
      {ReactDom.createPortal(<ModalOveraly title={props.title} message={props.message} errorHandeler = {props.errorHandeler} />,document.getElementById("overay-root"))}
    </React.Fragment>
  );
};

export default ErrorModal;
