import { Component } from "react";
import SingUpForm from "./SingUpForm";
import SingInForm from "./SingInForm";
import Buttons from "./Buttons";

class AutoSwitcher extends Component {
  state = {
    permission: false,
    qeydiyatYoxlanisi: false,
  };

  componentDidMount = () => {
    const userData = localStorage.getItem("userReactHomeWork2");

    if (!userData) {
      localStorage.setItem(
        "userReactHomeWork2",
        JSON.stringify({ email: "", password: "" })
      );
    } else {
      const userDataJson = JSON.parse(
        localStorage.getItem("userReactHomeWork2")
      );

      if (userDataJson.email != "") {
        this.setState({ permission: true });
      } else {
        this.setState({ permission: false });
      }
    }
  };

  singInFunction = (email, password) => {
    localStorage.setItem(
      "userReactHomeWork2",
      JSON.stringify({ email: email, password: password })
    );

    this.setState({
      qeydiyatYoxlanisi: true,
    });
  };

  singUpFunction = (password) => {
    const acound = JSON.parse(localStorage.getItem("userReactHomeWork2"));

    if (acound.password === password) {
      this.setState({
        qeydiyatYoxlanisi: true,
      });
    }
  };

  render = () => {
    let formComponent;

    if (this.state.qeydiyatYoxlanisi) {
      formComponent = <Buttons></Buttons>;
    } else {
      if (this.state.permission) {
        formComponent = <SingUpForm singUpFunction={this.singUpFunction} />;
      } else {
        formComponent = <SingInForm singInFunction={this.singInFunction} />;
      }
    }

    return (
      <>
        <p> OK {this.state.permission ? "true" : "false"}</p> {formComponent}
      </>
    );
  };
}

export default AutoSwitcher;
