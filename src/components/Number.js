import { Component } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const Container = styled.div`
  /* Adapt the size based on the size prop */
  width: ${(props) => (props.large ? "128px" : "53px")};
  padding: 10px;
  border: 1px solid black;
  height: 40px;
  text-align: center;
  line-height: 40px;
  cursor: pointer;
  background-color: #dfdfdf;
`;

class Number extends Component {
  render() {
    return (
      <Container
        large={this.props.large}
        onClick={() => this.props.onClick(this.props.value)}
      >
        {this.props.value}
      </Container>
    );
  }
}
Number.propTypes = {
  large: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
  value: PropTypes.number.isRequired,
};
export default Number;
