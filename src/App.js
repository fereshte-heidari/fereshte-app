// import logo from './logo.svg';
import { Component, useState } from 'react';
import './App.css';
import Person from "./Person/Person.js"

class App extends Component {

state= {
  person1:["Alex",20],
  person2:["Diana",21]
  }

  changeHandler = (event) => { this.setState({
    person1:["Alex",20],
    person2:[event.target.value,40]
    })

  }

  nameHandler = (name) => { this.setState({
    person1:[name,20],
    person2:["Diana",40]
    })
  }
render(){
  return (<div className="App">
  <h1>Hi, I am a react App.</h1>
  <button onClick={() => this.nameHandler("Sobhan")}>Update Names</button>
  <Person click={this.nameHandler.bind(this,"Fereshte")} name={this.state.person1[0]}  age={this.state.person1[1]}/>
  <Person changed={this.changeHandler} name={this.state.person2[0]}  age={this.state.person2[1]}>The sister</Person>
</div>)
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
