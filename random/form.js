import React from 'react' // This needs to be installed into your project through yarn, so when you begin a project that will be using react, ideally you should follow the setup that they suggest in the react docs, but at the very least you need to run `yarn add react` in your terminal!!!!!!

class RandomForm extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      inputs: {
        firstName: '',
        lastName: '',
        emailAddress: '',
        password: ''
      }
    }
    // you can do stuff up here, too, but you almost never need to!!!!!!!!!!
  }

  // Up here you can declare functions and bind them TO `this`!!!

  // this.setState({ [key]: value })

  // We want to build a function here that looks at the value of an input which has been changed and sets that input's state value to the updated value
  updateStateValues = event => { // We want to bind this function to `this`. Anonymous arrow functions preserve `this`, meaning they maintain the current scope
    // event is the current event that is taking place, in this case, a change to the input
    // But this function will only ever get called on changes to inputs, so other events don't matter

    const input = event.currentTarget

    this.setState(state => ({
      inputs: {
        ...state.inputs,
        [input.name]: input.value
      }
    }))
  }

  render() {
    // out here you can declare variables to BE used in your return function!!!

    return(
      // Here's where the html GOES!!!!!
      <form>
        <label for="firstName">
          First Name
          <input onChange={(event) => this.updateStateValues(event)} id="firstName" name="firstName" value='' />
        </label>
        <input onChange={(event) => this.updateStateValues(event)} name="lastName" placeholder="Last Name" />
        <input onChange={(event) => this.updateStateValues(event)} name="emailAddress" placeholder="Email Address" />
        <input onChange={(event) => this.updateStateValues(event)} name="password" placeholder="Password" />
        <button>Submit</button>
      </form>               
    )
  }
}

export default RandomForm

// inputs:
//   value
//   name
//   onChange
//   onBlur
//   onFocus
//   placeholder


// We need a form, inputs for first name, last name, email, and password, and a way to submit it