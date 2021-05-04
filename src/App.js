// import logo from './logo.svg';
import { Component, useState } from "react";
import classes from "./App.module.css";
import Person from "./Persons/Person/Person.js";
import UserInput from "./UserInput.js";
import UserOutput from "./UserOutput.js";
import ValidationComponent from "./ValidationComponent.js";
import CharComponent from "./CharComponent.js";
import Persons from "./Persons/Persons.js";
class App extends Component {
  state = {
    persons: [
      { id: "saba1", name: "Alex", age: 20 },
      { id: "mahla1", name: "Diana", age: 21 },
      { id: "m22ahla1", name: "Diana", age: 21 },
    ],
    showPerson: false,
    numberOfChar: 0,
    userName: "",
  };

  inputChangeHandler = (event) => {
    this.setState({
      numberOfChar: event.target.value.length,
      userName: event.target.value,
    });
  };

  deletingHandler = (index) => {
    let userName = this.state.userName.split("");
    userName.splice(index, 1);
    let updatedUserName = userName.join("");

    this.setState({ userName: updatedUserName });
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
    let person;
    let btnClass = [classes.Button];
    if (this.state.showPerson) {
      person = (
        <div>
          <Persons
            persons={this.state.persons}
            clicked={this.deleteHandler}
            changed={this.changeHandler}
          />
        </div>
      );
      btnClass.push(classes.Red);
    }
    let text;
    if (this.state.numberOfChar <= 5) {
      text = "Text too Short";
    } else {
      text = "Text long enough";
    }

    const charList = this.state.userName.split("").map((user, index) => {
      return (
        <CharComponent
          deleting={() => this.deletingHandler(index)}
          letter={user}
          key={index}
        />
      );
    });

    return (
      <div className={classes.App}>
        <input onChange={this.inputChangeHandler} />
        <ValidationComponent output={text} />
        <p>{this.state.userName}</p>
        {charList}
        <h1>Hi, I am a React App.</h1>
        <button className={btnClass.join(" ")} onClick={this.showHandler}>
          Update Names
        </button>
        {person}
      </div>
    );
  }
}

export default App;
