import React, { Component } from 'react';

import Input from './Input';

export default class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputs: {
        firstName: '',
        lastName: '',
        email: '',
        password: ''
      }
    };
  }

  updateInput = (event) => {
    const { name, value } = event.currentTarget

    this.setState(state => ({
      inputs: {
        ...state.inputs,
        [name]: value
      }
    }))
  }


  render() {
    return (
      <form>
        <Input inputName="firstName" changeFunction={this.updateInput} inputPlaceholder="First Name" inputVal={this.state.firstName} />
        <Input />
        <Input />
        <Input />
        <button>Submit</button>
      </form>
    );
  }
}
