
import "./App.css";
import { useState, useEffect } from "react";
import Nav from './components/Nav';
import FormAddUser from "./page/FormAddUser";
import ListContacts from "./page/ListContacts";
import Home from './page/Home';

function App() {
  const [route, setRoute] = useState('home');
  const handleRouteChange = (newToogle) => {
    setRoute(newToogle);
    console.log(newToogle)
  };

  const [userList, setListUsers] = useState([]);
  useEffect(()=>{
    // eslint-disable-next-line no-inner-declarations
    async function getUsers() {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        const data = await response.json();
        setListUsers(data); 
    }
  getUsers()
  },[])
  const removeUser = (userId) => {
  const usersUpdate = userList.filter(user => user.id !== userId);
    setListUsers(usersUpdate)
  }
  
  const submitFormHandler = (e) => {
    e.preventDefault();
    const newContactUser = {
      'firstName': e.target.firstName.value,
      'lastName': e.target.lastName.value,
      'phone': e.target.phone.value,
    };
    setListUsers([...userList, newContactUser]);
    console.log(newContactUser);
}

  return (
    <>
      <div>
        <Nav onToogleChange={handleRouteChange}/>
        {route === 'home' && <Home />}
        {route === 'list' && <ListContacts userList={userList} removeUser={removeUser}/>}
        {route === 'add' && <FormAddUser submitFormHandler={submitFormHandler}/>}  
      </div>
    </>
  );
}

export default App;
