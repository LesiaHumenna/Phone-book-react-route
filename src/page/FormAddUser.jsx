import { useFormik } from "formik";
import "./FormAdd.scss";
import { useNavigate } from "react-router-dom";

const validate = (values) => {
  const errors = {};
  if (!values.name || values.name === null) {
    errors.name = "Required";
  } else if (values.name.length > 15) {
    errors.name = "Must be 15 characters or less";
  }
  if (!values.userName || values.name === null) {
    errors.userName = "Required";
  } else if (values.userName.length > 20) {
    errors.userName = "Must be 20 characters or less";
  }
  if (!values.phone || values.name === null) {
    errors.phone = "Required";
  }
  return errors;
};

// eslint-disable-next-line react/prop-types
function FormAddUser ({setListUsers,lastUserId, setLastUserId,userList}) {
const navigate = useNavigate()

  const formik = useFormik({
    initialValues: {
      id: " ",
      name: "",
      username: "",
      phone: "",
    },
    validate,
    _onSubmit: (values) => {
      submitFormHandler(values);
      formik.resetForm( navigate('/list'));
      navigate('/list')
      console.log(JSON.stringify(values, null, 2));
      
    },
    get onSubmit() {
      return this._onSubmit;
      
    },
    set onSubmit(values) {
      this._onSubmit(values);
      navigate('/list')
    },
  });

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
    console.log(newContactUser);
    console.log(userList);
  };

  return (
    <>
    <form onSubmit={submitFormHandler} className="form-inputs" >
        <label htmlFor="firstName">First Name</label>
        <input
          id="name"
          name="name"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.name}
        />
        {formik.errors.name ? <div>{formik.errors.name}</div> : null}
        <label htmlFor="lastName">Last Name</label>
        <input
          id="username"
          name="username"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.username}
        />
        {formik.errors.username ? <div>{formik.errors.username}</div> : null}
        <label htmlFor="phone">Phone</label>
        <input
          id="phone"
          name="phone"
          type="phone"
          onChange={formik.handleChange}
          value={formik.values.phone}
        />
        {formik.errors.phone ? <div>{formik.errors.phone}</div> : null}
      <div className="btn-form">
        <button type="submit"> Submit</button>
        <button onClick={formik.handleReset} type="reset">Reset</button>
      </div>
      </form>
    </>
  )
}

export default FormAddUser;
