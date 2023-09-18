import { useState } from "react";
import "./App.css";
import FormAddUser from "./page/FormAddUser";
import ListContacts from "./page/ListContacts";
import Nav from './components/Nav';

function App() {
  const [route, setRoute] = useState('home');
  const [userList, setListUsers] = useState([]);

  const handleRouteChange = (newToogle) => {
    setRoute(newToogle);
    console.log (newToogle)
}

const handleSubmit = (newUser) => {
  setListUsers([...setListUsers, newUser]);
}
console.log(handleSubmit);
  return (
    <>
      <div>
      <Nav onToogleChange={handleRouteChange}/>
          
          {route === 'list' && <ListContacts userList={userList} />}
          {route === 'add' && <FormAddUser handleSubmit={handleSubmit} />}  
          
        <h1>Your Contacts</h1>
      </div>
    </>
  );
}

export default App;
