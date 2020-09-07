import React, { Component } from "react";
import "./signinn.scss";
import FormInput from "../form-input/FormInput";
import CustomButoon from "../custom-button/CustomButoon";

export class Signin extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
    };
  }
  handleClick = (event) => {
    event.preventDefault();
    this.setState({ email: "", password: "" });
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="sign-in">
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>
        <form onSubmit={this.handleClick}>
          <FormInput
            type="email"
            name="email"
            value={this.state.email}
            required
            handleChange={this.handleChange}
            label="email"
          />

          <FormInput
            type="password"
            name="password"
            value={this.state.password}
            required
            handleChange={this.handleChange}
            label="password"
          />

          <CustomButoon type="submit"> Sign in</CustomButoon>
        </form>
      </div>
    );
  }
}

export default Signin;
