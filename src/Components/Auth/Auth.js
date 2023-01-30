import React, { Component } from "react";
import { Formik } from "formik";
import "./Auth.css";

class Auth extends Component {
  validateForm = (values) => {
    const errors = {};

    if (!values.email) {
      errors.email = "Required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
    ) {
      errors.email = "Invalid email address";
    }

    if (!values.password) {
      errors.password = "Required";
    } else if (values.password.length < 4) {
      errors.password = "Must be atleast 4 characters!";
    }

    if (!values.passwordConfirm) {
      errors.passwordConfirm = "Required";
    } else if (values.password !== values.passwordConfirm) {
      errors.passwordConfirm = "Password field does no match!";
    }
    //console.log("Errors:", errors)
    return errors;
  };

  render() {
    return (
      <div>
        <Formik
          initialValues={{
            email: "",
            password: "",
            passwordConfirm: "",
          }}
          onSubmit={(values) => {
            console.log(values);
          }}
          validate={this.validateForm}
        >
          {({ values, handleChange, handleSubmit, errors }) => (
            <div className="AuthForm">
              <form onSubmit={handleSubmit}>
                <input
                  name="email"
                  placeholder="Enter Your Email"
                  className="form-control"
                  value={values.email}
                  onChange={handleChange}
                />
                <span style={{ color: "red" }}>{errors.email}</span>
                <br />
                <input
                  name="password"
                  placeholder="Password"
                  className="form-control"
                  value={values.password}
                  onChange={handleChange}
                />
                <span style={{ color: "red" }}>{errors.password}</span>
                <br />
                <input
                  name="passwordConfirm"
                  placeholder="Confirm Password"
                  className="form-control"
                  value={values.passwordConfirm}
                  onChange={handleChange}
                />
                <span style={{ color: "red" }}>
                  {errors.passwordConfirm}
                </span>
                <br />
                <button type="submit" className="btn btn-success">
                  Sign Up
                </button>
              </form>
            </div>
          )}
        </Formik>
      </div>
    );
  }
}

export default Auth;
