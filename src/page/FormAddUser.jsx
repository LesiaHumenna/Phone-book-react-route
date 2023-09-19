import { useState } from "react";
import { useFormik } from "formik";
import "./FormAdd.scss";

function FormAddUser({ submitFormHandler }) {
  function validate(values) {
    const errors = {};
    if (!values.firstName) {
      errors.firstName = "Required";
    } else if (values.firstName.length > 15) {
      errors.firstName = "Must be 15 characters or less";
    }

    if (!values.lastName) {
      errors.lastName = "Required";
    } else if (values.lastName.length > 20) {
      errors.lastName = "Must be 20 characters or less";
    }

    if (!values.phone) {
      errors.phone = "Required";
    }
    return errors;
  }

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      phone: "",
    },
    _onSubmit: (values) => {
      console.log(JSON.stringify(values, null, 1));
      //localStorage.setUsers("values", JSON.stringify(values));
    },
    get onSubmit() {
      return this._onSubmit;
    },
    set onSubmit(values) {
      submitFormHandler(values);
      // eslint-disable-next-line react/prop-types, no-setter-return
    },
    validate,
  });
  return (
    <form onSubmit={submitFormHandler} className="form-inputs">
      <label htmlFor="firstName">First Name</label>
      <input
        id="firstName"
        name="firstName"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.firstName}
      />
      {formik.errors.firstName ? <div>{formik.errors.firstName}</div> : null}
      <label htmlFor="lastName">Last Name</label>
      <input
        id="lastName"
        name="lastName"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.lastName}
      />
      {formik.errors.lastName ? <div>{formik.errors.lastName}</div> : null}
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
    </form>
  );
}

export default FormAddUser;
