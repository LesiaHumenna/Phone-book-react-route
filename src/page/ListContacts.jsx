/* eslint-disable no-unused-vars */
//import Table from 'react-bootstrap/Table';
//import { updateLocale } from 'moment';

import "./ListContacts.scss";


function ListContacts({userList, setListUsers}) {

  const removeUser = (userId) => {
   
    const usersUpdate = userList.filter((item) => item.id !== userId);
    setListUsers(usersUpdate);
    console.log(usersUpdate);
    alert('You really want to delete?')
  };
  //

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
