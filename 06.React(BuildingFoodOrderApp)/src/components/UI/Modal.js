import {Fragment} from "react";
import ReactDom from "react-dom";
import classes from "./Modal.module.css";

const BackDrop = (props) => {
  return <div className={classes.backdrop}></div>;
};
const ModalOverlay = (props) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};

const portalElemnt = document.getElementById("overlays");

const Modal = (props) => {
  return<Fragment>
    {ReactDom.createPortal(<BackDrop/>, portalElemnt)}
    {ReactDom.createPortal(
      <ModalOverlay>{props.children}</ModalOverlay>,
      portalElemnt
    )} 
  </Fragment>;
};

export default Modal;
