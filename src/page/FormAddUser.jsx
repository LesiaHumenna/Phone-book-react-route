import { useFormik } from "formik";
import "./FormAdd.scss";
//import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";


const validate = (values) => {
  const errors = {};
  if (!values.name) {
    errors.name = "Required";
  } else if (values.name.length > 15) {
    errors.name = "Must be 15 characters or less";
  }
  if (!values.userName) {
    errors.userName = "Required";
  } else if (values.userName.length > 20) {
    errors.userName = "Must be 20 characters or less";
  }
  if (!values.phone) {
    errors.phone = "Required";
  }
  return errors;
};

// eslint-disable-next-line react/prop-types
function FormAddUser ({submitFormHandler}) {
  // eslint-disable-next-line no-undef
  
  //const navigate = useNavigate();

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
      formik.resetForm();
      
      console.log(JSON.stringify(values, null, 2));
      
    },
    get onSubmit() {
      return this._onSubmit;
    },
    set onSubmit(values) {
      this._onSubmit(values);
    },
  });

  // eslint-disable-next-line no-unused-vars
  return (
    <>
    
     <form onSubmit={submitFormHandler} className="form-inputs">
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

        <button type="submit">Submit</button> 
        <button onClick={formik.handleReset} type="reset">
          Reset
        </button>
      </form>
    </>
  )
}

export default FormAddUser;
