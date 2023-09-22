/* eslint-disable no-unused-vars */
//import Table from 'react-bootstrap/Table';
//import { updateLocale } from 'moment';
import { useState, useEffect } from "react";
import "./ListContacts.scss";
import { useNavigate } from "react-router-dom";

function ListContacts() {
  const [userList, setListUsers] = useState([]);
  const [lastUserId, setLastUserId] = useState(0);
  const navigate = useNavigate();
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
  const removeUser = (userId) => {
    const usersUpdate = userList.filter((item) => item.id !== userId);
    setListUsers(usersUpdate);
    console.log(usersUpdate);
    alert('You really want to delete?')
  };
  //
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
      navigate('/list')
    }
    console.log(newUserId);
  };

  return (
    <>
      <h2 className="list-title">All Contact</h2>
      <div className="user-list">
        <table>
          <thead>
            <tr>
              <th>#</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Phone</th>
              <th>Remove</th>
            </tr>
          </thead>
          {userList.map((user) => (
            // eslint-disable-next-line react/jsx-key
            <tbody key={user.id}>
              <tr className="user-contact">
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.username}</td>
                <td>{user.phone}</td>
                <td>
                  <img
                    onClick={() => removeUser(user.id)}
                    data-id={user.id}
                    className="img-list"
                    src="./src/assets/icons8-remove-64.png"
                    alt="Remove"
                  />
                </td>
              </tr>
            </tbody>
          ))}
        </table>
      </div>
    </>
  );
}

export default ListContacts;
