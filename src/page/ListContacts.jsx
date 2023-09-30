import "./ListContacts.scss";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import { useState } from "react";
import Modal from "react-bootstrap/Modal";

function ListContacts({ userList, setListUsers }) {
  const [selectedUserId, setSelectedUserId] = useState("");
  const [showModal, setShowModal] = useState(false);

  const removeUser = (userId) => {
    const usersUpdate = userList.filter((user) => user.id !== userId);
    setListUsers(usersUpdate);
    console.log(usersUpdate);
  };

  return (
    <>
      <h2 className="list-title">All Contact</h2>

      {showModal && (
        <div
          className="modal show"
          style={{ display: "block", position: "initial" }}
        >
          <Modal.Dialog>
            <Modal.Header closeButton>
              <Modal.Title>Delete user?</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <p>You are sure to remove the user?</p>
            </Modal.Body>
            <Modal.Footer>
              <button
                onClick={() => removeUser(selectedUserId)}
                className="btn-secondary"
              >
                Delete
              </button>
              <button
                onClick={() => setShowModal(false)}
                className="btn-primary"
              >
                Cancel
              </button>
            </Modal.Footer>
          </Modal.Dialog>
        </div>
      )}

      <div className="user-list">
        <table>
          <thead>
            <tr>
              <th>#</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Phone</th>
              <th>Delete</th>
              <th>Remove</th>
            </tr>
          </thead>
          {userList.map((user) => (
            <tbody key={user.id}>
              <tr className="user-contact">
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.username}</td>
                <td>{user.phone}</td>
                <td>
                  <img
                    onClick={() => {
                      setSelectedUserId(user.id);
                      setShowModal(true);
                    }}
                    data-id={user.id}
                    className="img-list"
                    src="src/assets/icons8-remove-64.png"
                    alt="Remove"
                  />
                </td>
                <td>
                  <NavLink to={`/edit/${user.id}`} state={user}>
                    <button className="btn-edit" type="edit">
                      Edit
                    </button>
                  </NavLink>
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
