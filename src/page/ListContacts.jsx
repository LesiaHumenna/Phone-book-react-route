//import Table from 'react-bootstrap/Table';
//import { updateLocale } from 'moment';
import './ListContacts.scss';
import { useEffect, useState } from 'react';

function ListContacts(props) {
  let [userList, setListUsers] = useState([]);

  useEffect(()=>{
   
    // eslint-disable-next-line no-inner-declarations
    async function getUsers() {
      
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        const data = await response.json();
        setListUsers(data); 
        console.log(data);
       
    }
  getUsers()
},[])

const removeUser = (userId) => {
  const usersUpdate = userList.filter(user => user.id !== userId);
    setListUsers(usersUpdate)
  } 


  return (
    <>
    <h2>Contact</h2>
    <div  className='user-list'>
    <table >
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
        <tbody key={user.id} >
          <tr className='user-contact'>
            <td>{user.id}</td>
            <td>{user.name}</td>
            <td>{user.username}</td>
            <td>{user.phone}</td>
            <td><img onClick={() => removeUser(user.id)} data-id={user.id} src="./src/assets/icons8-remove-64.png" alt='Remove' /></td>
          </tr>
        </tbody>
      ))}
    </table>
   
    </div>
    </>
  );
}

export default ListContacts;