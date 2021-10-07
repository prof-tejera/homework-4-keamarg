import { Component } from "react";
import styled, { css } from "styled-components";
import PropTypes from "prop-types";

const Container = styled.div`
  /* Adapt the color based on the type prop */
  ${(props) =>
    props.type === "operator" &&
    css`
      background: #287ed4;
      color: white;
    `}
  ${(props) =>
    props.type === "other" &&
    css`
      background: #dfdfdf;
    `}

  padding: 10px;
  border: 1px solid black;
  width: 53px;
  text-align: center;
  line-height: 40px;
  cursor: pointer;
`;

class Operator extends Component {
  render() {
    return (
      <Container
        type={this.props.type}
        onClick={() => this.props.onClick(this.props.value)}
      >
        {this.props.value}
      </Container>
    );
  }
}

Operator.propTypes = {
  type: PropTypes.string,
  onClick: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};

export default Operator;
