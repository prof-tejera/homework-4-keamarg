import { Component } from "react";

import Number from "./Number";
import Operator from "./Operator";
import Screen from "./Screen";

class Calculator extends Component {
  state = {
    first: 0,
    operator: null,
    second: null,
  };

  handleNumberClick = (number) => {
    if (!this.state.operator) {
      this.setState({
        first:
          this.state.first.toString().length > 9
            ? parseFloat(this.state.first.toString().slice(0, 10))
            : `${this.state.first || ""}${number}`,
      });
    } else {
      this.setState({
        second:
          this.state.second != null && this.state.second.toString().length > 9
            ? parseFloat(this.state.second.toString().slice(0, 10))
            : `${this.state.second || ""}${number}`,
      });
    }
  };

  handleOperatorClick = (operator) => {
    if (operator === "=") {
      const first = parseFloat(this.state.first);
      const second = parseFloat(this.state.second);

      if (this.state.operator === "+") {
        this.setState({ operator: null, first: first + second, second: null });
      } else if (this.state.operator === "/") {
        this.setState({ operator: null, first: first / second, second: null });
      } else if (this.state.operator === "-") {
        this.setState({ operator: null, first: first - second, second: null });
      } else if (this.state.operator === "x") {
        this.setState({ operator: null, first: first * second, second: null });
      }
    } else if (operator === "+/-") {
      this.setState({
        operator: null,
        first: this.state.first * -1,
        second: null,
      });
    } else if (operator === "%") {
      this.setState({
        operator: null,
        first: this.state.first / 100,
        second: null,
      });
    } else if (operator === ".") {
      this.setState({
        operator: null,
        first: `${this.state.first}${
          this.state.first.toString().includes(".") ? "" : "."
        }`,
        second: null,
      });
    } else if (operator === "clear") {
      this.setState({ first: 0, second: null, operator: null });
    } else {
      this.setState({ operator });
    }
  };

  getScreenValue = () => this.state.second || this.state.first;

  render() {
    return (
      <div>
        <Screen value={this.getScreenValue()} />
        <div>
          <div>
            <div style={{ display: "flex" }}>
              <Operator value="clear" onClick={this.handleOperatorClick} />
              <Operator value="+/-" onClick={this.handleOperatorClick} />
              <Operator value="%" onClick={this.handleOperatorClick} />
              <Operator
                value="/"
                type="operator"
                onClick={this.handleOperatorClick}
              />
            </div>
            <div style={{ display: "flex" }}>
              <Number value={7} onClick={this.handleNumberClick} />
              <Number value={8} onClick={this.handleNumberClick} />
              <Number value={9} onClick={this.handleNumberClick} />
              <Operator
                value="x"
                type="operator"
                onClick={this.handleOperatorClick}
              />
            </div>
            <div style={{ display: "flex" }}>
              <Number value={4} onClick={this.handleNumberClick} />
              <Number value={5} onClick={this.handleNumberClick} />
              <Number value={6} onClick={this.handleNumberClick} />
              <Operator
                value="-"
                type="operator"
                onClick={this.handleOperatorClick}
              />
            </div>
            <div style={{ display: "flex" }}>
              <Number value={1} onClick={this.handleNumberClick} />
              <Number value={2} onClick={this.handleNumberClick} />
              <Number value={3} onClick={this.handleNumberClick} />
              <Operator
                value="+"
                type="operator"
                onClick={this.handleOperatorClick}
              />
            </div>
            <div style={{ display: "flex" }}>
              <Number large={true} value={0} onClick={this.handleNumberClick} />
              <Operator
                value="."
                type="other"
                onClick={this.handleOperatorClick}
              />
              <Operator
                value="="
                type="operator"
                onClick={this.handleOperatorClick}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Calculator;
