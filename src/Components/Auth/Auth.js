import React, { Component } from "react";
import { Formik } from "formik";
import "./Auth.css";
import { auth } from "../../redux/authActionCreators";
import { connect } from "react-redux";

const mapDispatchToProps = (dispatch) => ({
  auth: (email, password, mode) => dispatch(auth(email, password, mode)),
});

class Auth extends Component {
  state = {
    mode: "Sign Up",
    showPassword: false,
  };

  validateForm = (values) => {
    const errors = {};

    if (!values.email) {
      errors.email = "Required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
    ) {
      errors.email = "Invalid email address";
    }
    if (this.state.mode === "Sign Up") {
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
    }
    //console.log("Errors:", errors)
    return errors;
  };

  switchModeHandler = () => {
    this.setState({
      mode: this.state.mode === "Sign Up" ? "Login" : "Sign Up",
    });
  };

  togglePasswordVisibility = () => {
    this.setState({ showPassword: !this.state.showPassword });
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
            this.props.auth(
              values.email,
              values.password,
              this.state.mode
            );
          }}
          validate={this.validateForm}
        >
          {({ values, handleChange, handleSubmit, errors }) => (
            <div className="AuthForm">
              <button
                className="btn btn-lg buttonForm"
                onClick={this.switchModeHandler}
              >
                Switch to{" "}
                {this.state.mode === "Sign Up" ? "Login" : "Sign Up"}
              </button>
              <br />
              <br />
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
                  type={this.state.showPassword ? "text" : "password"}
                  placeholder="Password"
                  className="form-control"
                  value={values.password}
                  onChange={handleChange}
                />
                <span style={{ color: "red" }}>{errors.password}</span>
                <br />
                {this.state.mode === "Sign Up" ? (
                  <div>
                    <input
                      name="passwordConfirm"
                      type={this.state.showPassword ? "text" : "password"}
                      placeholder="Confirm Password"
                      className="form-control"
                      value={values.passwordConfirm}
                      onChange={handleChange}
                    />
                    <span style={{ color: "red" }}>
                      {errors.passwordConfirm}
                    </span>
                    <br />
                  </div>
                ) : null}
                <input
                  type="checkbox"
                  onClick={this.togglePasswordVisibility}
                />
                <label style={{ paddingLeft: "5px" }}>Show Password</label>
                <br />
                <button type="submit" className="btn btn-success">
                  {this.state.mode === "Sign Up" ? "Sign Up" : "Login"}
                </button>
              </form>
            </div>
          )}
        </Formik>
      </div>
    );
  }
}

export default connect(null, mapDispatchToProps)(Auth);
