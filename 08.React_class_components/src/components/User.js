import classes from './User.module.css';
import {Component} from "react"

class User extends Component{
componentWillUnmount(){
  console.log("user will unmount!")       
  //  hide users클릭시 user will unmount가 세번 호출 
  // 3명을 렌더링하고 각각의 인스턴스들이 모두 삭제되기때문
}

render(){
  // console.log(this)
return <li className={classes.user}>{this.props.name}</li>;
}
}


// const User = (props) => {
//  return <li className={classes.user}>{props.name}</li>;
// };

export default User;
