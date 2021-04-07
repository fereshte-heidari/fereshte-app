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

  render() {
    const style = {
      border: "solid blue 1px",
      cursor: "pointer",
    };
    let person;
    if (this.state.showPerson) {
      person = (
        <div>
          {this.state.persons.map((person) => {
            return <Person name={person.name} age={person.age} />;
          })}

          {/* <Person
            click={this.nameHandler.bind(this, "Fereshte")}
            name={this.state.person1[0]}
            age={this.state.person1[1]}
          />

          <Person
            changed={this.changeHandler}
            name={this.state.person2[0]}
            age={this.state.person2[1]}
          /> */}
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

// function App() {
//   return (
//     <div className="App">
//       <h1>Hi, I am a react App.</h1>
//       <Person name="Alex"  age="20"/>
//       <Person name="Diana"  age="21">The sister</Person>
//     </div>
//   );
// }

export default App;
