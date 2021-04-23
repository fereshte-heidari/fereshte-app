// import logo from './logo.svg';
import { Component, useState } from "react";
import "./App.css";
import Person from "./Person/Person.js";
import Radium, { StyleRoot } from "radium";
class App extends Component {
  state = {
    persons: [
      { id: "saba1", name: "Alex", age: 20 },
      { id: "mahla1", name: "Diana", age: 21 },
      { id: "m22ahla1", name: "Diana", age: 21 },
    ],
    showPerson: false,
  };

  changeHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex((p) => {
      return id === p.id;
    });
    const person = { ...this.state.persons[personIndex] };
    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;
    this.setState({ persons: persons });
  };

  // nameHandler = (name) => {
  //   this.setState({
  //     persons: [
  //       { name: name, age: 20 },
  //       { name: "Diana", age: 21 },
  //     ],
  //   });
  // };

  showHandler = () => {
    const show = this.state.showPerson;
    this.setState({ showPerson: !show });
  };
  deleteHandler = (index) => {
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(index, 1);

    this.setState({ persons: persons });
  };

  render() {
    const style = {
      border: "solid blue 1px",
      cursor: "pointer",
      backgroundColor: "green",
      color: "white",
      height: "40px",
      weight: "100px",
      ":hover": {
        backgroundColor: "lightGreen",
        color: "black",
      },
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
                key={person.id}
                changed={(event) => {
                  return this.changeHandler(event, person.id);
                }}
              />
            );
          })}
        </div>
      );
      style.backgroundColor = "purple";
      style[":hover"] = {
        backgroundColor: "salmon",
        color: "black",
      };
    }
    let text;
    if (this.state.numberOfChar <= 5) {
      text = "Text too Short";
    } else {
      text = "Text long enough";
    }

    return (
      <StyleRoot>
        <div className="App">
          <h1>Hi, I am a React App.</h1>
          <button style={style} onClick={this.showHandler}>
            Update Names
          </button>
          {person}
        </div>
      </StyleRoot>
    );
  }
}

export default Radium(App);
