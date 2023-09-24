/* eslint-disable no-undef */
import "./App.css";
import { useState, useEffect } from "react";
import FormAddUser from "./page/FormAddUser";
import ListContacts from "./page/ListContacts";
import Home from "./page/Home";
import ErrorPage from "./page/ErrorPage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./components/Root";
import Edit from "./page/Edit";

function App() {
  const [userList, setListUsers] = useState([]);
  const [lastUserId, setLastUserId] = useState(0);

  useEffect(() => {
    async function getUsers() {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      const users = await response.json();
      setListUsers(users);
      const maxId = Math.max(...users.map((user) => user.id), [0]);
      setLastUserId(maxId);
      console.log(users);
    }
    getUsers();
  }, []);

  const submitFormHandler = (e) => {
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
    }
    console.log(newContactUser);
    console.log(userList);
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/listId",
          element: (
            <ListContacts userList={userList} setListUsers={setListUsers} />
          ),
        },
        {
          path: "/formAdd",
          element: <FormAddUser submitFormHandler={submitFormHandler} />,
        },
        {
          path: ":editId",
          element: <Edit/>,
        },
      ],
    },
  ]);

  return (
    <>
        <RouterProvider router={router} />
    </>
  );
}

export default App;
