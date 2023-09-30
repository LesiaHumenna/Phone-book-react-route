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
import 'bootstrap/dist/css/bootstrap.min.css';
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
          path: "/list",
          element: (
            <ListContacts userList={userList} setListUsers={setListUsers} />
          ),
        },
        {
          path: ":formAddId",
          element: <FormAddUser setListUsers={setListUsers} lastUserId={lastUserId} setLastUserId={setLastUserId} userList={userList}/>,
        },
        {
          path: "/edit/:id",
          element: <Edit setListUsers={setListUsers} userList={userList}/>,
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
