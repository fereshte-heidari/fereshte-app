import React, { Component } from "react";
import classes from "./Person.module.css";

class Person extends Component {
  getSnapshotBeforeUpdate() {
    return { snapshot: "save this" };
  }

  componentDidUpdate(preProps, preState, snapshot) {
    console.log(snapshot);
  }
  render() {
    return (
      // <div className="Person">
      <div className={classes.Person}>
        <p onClick={this.props.click}>
          I'm {this.props.name} and I am {this.props.age} years old!{" "}
        </p>
        <input onChange={this.props.changed} value={this.props.name} />
      </div>
    );
  }
}

export default Person;
