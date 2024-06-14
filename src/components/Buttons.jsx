import { Component } from "react";

class Buttons extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onClickButton = (e) => {
    console.dir(e.target);
    if (e.target.textContent == "Good") {
      this.setState({ good: this.state.good + 1 });
    } else if (e.target.textContent == "Neutral") {
      this.setState({ neutral: this.state.neutral + 1 });
    } else if (e.target.textContent == "Bad") {
      this.setState({ bad: this.state.bad + 1 });
    }
  };

  render() {
    return (
      <div>
        <div onClick={this.onClickButton}>
          <button>Good</button>
          <button>Neutral</button>
          <button>Bad</button>
        </div>

        <div>
          <p>Good: {this.state.good}</p>
          <p>Neutral: {this.state.neutral}</p>
          <p>Bad: {this.state.bad}</p>
          <p>Total: {this.state.good + this.state.neutral + this.state.bad}</p>
          <p>
            Positive:
            {(this.state.good * 100) /
              (this.state.good + this.state.neutral + this.state.bad)}
            %
          </p>
        </div>
      </div>
    );
  }
}

export default Buttons;
