// import logo from './logo.svg';
import { Component, useState } from "react";
import "./App.css";
import Person from "./Person/Person.js";
import UserInput from "./UserInput.js";
import UserOutput from "./UserOutput.js";
class App extends Component {
  state = {
    person1: ["Alex", 20],
    person2: ["Diana", 21],
    showPerson: false,
  };

  changeHandler = (event) => {
    this.setState({
      person1: ["Alex", 20],
      person2: [event.target.value, 40],
    });
  };

  nameHandler = (name) => {
    this.setState({
      person1: [name, 20],
      person2: ["Diana", 40],
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

    return (
      <div className="App">
        <h1>Hi, I am a React App.</h1>
        <button style={style} onClick={this.showHandler}>
          Update Names
        </button>
        {this.state.showPerson ? (
          <div>
            <Person
              click={this.nameHandler.bind(this, "Fereshte")}
              name={this.state.person1[0]}
              age={this.state.person1[1]}
            />

            <Person
              changed={this.changeHandler}
              name={this.state.person2[0]}
              age={this.state.person2[1]}
            />
          </div>
        ) : null}
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
