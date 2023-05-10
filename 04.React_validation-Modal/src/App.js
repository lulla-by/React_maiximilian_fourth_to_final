import React, { useState } from 'react';
import AddUser from './Components/Users/AddUser';
import UsersList from './Components/Users/UsersList';


function App() {

  const [usersList, setUsersList] = useState([])

  const saveUserListHandeler=(userData)=>{
    setUsersList([...usersList,userData])
    // console.log(userData)
  }

  return (
    <React.Fragment>
      <AddUser onAddUser={saveUserListHandeler} />
      <UsersList users={usersList}/>
    </React.Fragment>
  );
}

export default App;
