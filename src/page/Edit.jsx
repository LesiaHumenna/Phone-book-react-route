/* eslint-disable react/prop-types */
import "./FormAdd.scss";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { Form } from "react-router-dom";
import {useState, useEffect} from "react";

function Edit(props) {
  const navigate = useNavigate("/list");

  const [formValues, setFormValues] = useState({
    id: "",
    name: "",
    username: "",
    phone: "",
  });

  const { id } = useParams();
  const user = props.userList.find((u) => u.id === parseInt(id));

  useEffect(() => {
    if (user) {
      setFormValues(user);
    }
  }, [user]);

  const handleChange = (e) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const index = props.userList.findIndex(u => u.id === parseInt(id));
    const updatedUsers = [...props.userList];
    updatedUsers[index] = {
    ...updatedUsers[index],
    ...formValues
    };
    props.setListUsers(updatedUsers);
    console.log(handleSubmit)
    navigate("/list");
    alert(`${formValues.name} edited!`)
  };

  return (
    <>
      <Form onSubmit={handleSubmit} className="form-edit">
        <input name="name"
          value={formValues.name}
          onChange={handleChange}
        />
        <input name="username"
          value={formValues.username}
          onChange={handleChange}
        />
        <input name="phone"
        value={formValues.phone}
        onChange={handleChange}
        />
        <button type="submit">Submit</button>
      </Form>
    </>
  );
}

export default Edit;
