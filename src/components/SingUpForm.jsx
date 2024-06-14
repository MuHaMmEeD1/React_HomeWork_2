import { Component } from "react";

class SingUpForm extends Component {
  state = {
    passwordInputValue: "",
  };

  onChangeInput = (e) => {
    if (e.target.name == "passwordInput") {
      this.setState({ passwordInputValue: e.target.value });
    }
  };

  formSubmit = (e) => {
    e.preventDefault();

    this.props.singUpFunction(this.state.passwordInputValue);
  };

  render = () => {
    return (
      <>
        <form onSubmit={this.formSubmit}>
          <h2>Sing Up</h2>

          <label>PassWord</label>
          <input
            name="passwordInput"
            onChange={this.onChangeInput}
            type="text"
          />

          <button>Sing Up</button>
        </form>
      </>
    );
  };
}

export default SingUpForm;
