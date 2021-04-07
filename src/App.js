// import logo from './logo.svg';
import { Component, useState } from "react";
import "./App.css";
import Person from "./Person/Person.js";
import UserInput from "./UserInput.js";
import UserOutput from "./UserOutput.js";
class App extends Component {
  state = {
    persons: [
      { name: "Alex", age: 20 },
      { name: "Diana", age: 21 },
    ],
    showPerson: false,
  };

  changeHandler = (event) => {
    this.setState({
      persons: [
        { name: "Alex", age: 20 },
        { name: event.target.value, age: 21 },
      ],
    });
  };

  nameHandler = (name) => {
    this.setState({
      persons: [
        { name: name, age: 20 },
        { name: "Diana", age: 21 },
      ],
    });
  };

  showHandler = () => {
    const show = this.state.showPerson;
    this.setState({ showPerson: !show });
  };
  deleteHandler = (index) => {
    const persons = this.state.persons;
    persons.splice(index, 1);

    this.setState({ persons: persons });
  };
  render() {
    const style = {
      border: "solid blue 1px",
      cursor: "pointer",
    };
    let person;
    if (this.state.showPerson) {
      person = (
        <div>
          {this.state.persons.map((person, index) => {
            return (
              <Person
                click={() => this.deleteHandler(index)}
                name={person.name}
                age={person.age}
              />
            );
          })}
        </div>
      );
    }

    return (
      <div className="App">
        <h1>Hi, I am a React App.</h1>
        <button style={style} onClick={this.showHandler}>
          Update Names
        </button>
        {person}
      </div>
    );
  }
}

export default App;
