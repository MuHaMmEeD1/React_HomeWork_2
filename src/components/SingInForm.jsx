import { Component } from "react";

class SingInForm extends Component {
  state = {
    emailInputValue: "",
    passwordInputValue: "",
  };

  onChangeInput = (e) => {
    if (e.target.name == "emailInput") {
      this.setState({ emailInputValue: e.target.value });
    } else if (e.target.name == "passwordInput") {
      this.setState({ passwordInputValue: e.target.value });
    }
  };

  formSubmit = (e) => {
    e.preventDefault();

    this.props.singInFunction(
      this.state.emailInputValue,
      this.state.passwordInputValue
    );
  };

  render = () => {
    return (
      <>
        <form onSubmit={this.formSubmit}>
          <h2>Sing In</h2>

          <label>Email</label>
          <input name="emailInput" onChange={this.onChangeInput} type="text" />
          <label>PassWord</label>
          <input
            name="passwordInput"
            onChange={this.onChangeInput}
            type="text"
          />

          <button>Sing In</button>
        </form>
      </>
    );
  };
}

export default SingInForm;
