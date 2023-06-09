import { useState, Component } from "react";
import User from "./User";

import classes from "./Users.module.css";

// const DUMMY_USERS = [
//   { id: "u1", name: "Max" },
//   { id: "u2", name: "Manuel" },
//   { id: "u3", name: "Julie" },
// ];

class Users extends Component {
  constructor() {
    super();
    this.state = {
      showUsers: true,
      moreState: "Test",
    };
  }

  componentDidUpdate(){
    // try{
    //   someCodeWhichMightFail()
    // }catch(err){
    //   //handle error
    // }
    if(this.props.users.length === 0){
      throw new Error("No users provided")
    }
  }
  toggleUsersHandler() {
    this.setState((curState) => {
      // console.log(curState)
      // 여기에서 반환하는 값은 기존 상태와 결합된 것,  showUsers의 값만 바꾸고  moreState는 그대로 둠
      return { showUsers: !curState.showUsers };
    });
  }
  render() {
    // console.log(this)
    const usersList = (
      <ul>
        {this.props.users.map((user) => (
          <User key={user.id} name={user.name} />
        ))}
      </ul>
    );
    return <div className={classes.users}>
      <button onClick={this.toggleUsersHandler.bind(this)}>
        {this.state.showUsers ? "Hide" : "Show"} Users
      </button>
      {this.state.showUsers && usersList}
    </div>;
  }
}

// const Users = () => {
//   const [showUsers, setShowUsers] = useState(true);

//   const toggleUsersHandler = () => {
//     setShowUsers((curState) => !curState);
//   };

//   const usersList = (
//     <ul>
//       {DUMMY_USERS.map((user) => (
//         <User key={user.id} name={user.name} />
//       ))}
//     </ul>
//   );

//   return (
//     <div className={classes.users}>
//       <button onClick={toggleUsersHandler}>
//         {showUsers ? "Hide" : "Show"} Users
//       </button>
//       {showUsers && usersList}
//     </div>
//   );
// };

export default Users;
