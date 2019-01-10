import React, { Component } from 'react';
import styled from 'styled-components';

class Input extends Component {
  render() {
    const {
      changeFunction,
      inputName,
      inputPlaceholder,
      inputVal
    } = this.props;

    return (
      <StyledInput
        name={inputName}
        onChange={changeFunction}
        placeholder={inputPlaceholder}
        value={inputVal}
      />
    );
  }
}

const StyledInput = styled.input`
  background: neongreen;
  border-radius: 3px;
  width: 180px;
`;

export default Input;
