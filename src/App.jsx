import "./App.css";
import { useState, useEffect } from "react";
import Nav from "./components/Nav";
import FormAddUser from "./page/FormAddUser";
import ListContacts from "./page/ListContacts";
import Home from "./page/Home";

function App() {
  const [route, setRoute] = useState("home");
  const [lastUserId, setLastUserId] = useState(0);

  const handleRouteChange = (newToogle) => {
    setRoute(newToogle);
    console.log(newToogle);
  };

  const [userList, setListUsers] = useState([]);
  useEffect(() => {
    // eslint-disable-next-line no-inner-declarations
    async function getUsers() {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      const users = await response.json();
     
      setListUsers(users);
      
      const maxId = Math.max(...users.map((user) => user.id), [0]);
      setLastUserId(maxId);
    
    }
    getUsers();
  }, []);

  const removeUser = (userId) => {
    const usersUpdate = userList.filter((item) => item.id !== userId);
    console.log(usersUpdate);
    setListUsers(usersUpdate);
  };

  function submitFormHandler(e) {
    e.preventDefault();

    const newContactUser = {
      id: lastUserId + 1,
      name: e.target.name.value,
      username: e.target.username.value,
      phone: e.target.phone.value,
    };
    const newUserId = userList.some((item) => item.id === newContactUser.id);
    if (!newUserId) {
      setListUsers([...userList, newContactUser]);
      setLastUserId(lastUserId + 1);
      setRoute("list");
    }
    console.log(userList);
  }

  const handleReset = () => {
    setRoute("list");
  };
  return (
    <>
      <div>
        <Nav onToogleChange={handleRouteChange} />
        {route === "home" && <Home />}
        {route === "list" && (
          <ListContacts userList={userList} removeUser={removeUser} />
        )}
        {route === "add" && (
          <FormAddUser submitFormHandler={submitFormHandler} handleReset={handleReset}/>
        )}
      </div>
    </>
  );
}

export default App;
