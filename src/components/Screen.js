import { Component } from "react";
import styled from "styled-components";

const Container = styled.div`
  border: 1px solid black;
  width: 250px;
  height: 30px;
  text-align: right;
  margin-bottom: 10px;
  background-color: black;
  color: white;
  padding: 20px 30px 20px 20px;
  line-height: 30px;
  font-size: 40px;
  overflow: hidden;
`;

class Screen extends Component {
  render() {
    return <Container>{this.props.value}</Container>;
  }
}

export default Screen;
