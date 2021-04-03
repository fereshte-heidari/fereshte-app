// import logo from './logo.svg';
import { Component, useState } from 'react';
import './App.css';
import Person from "./Person/Person.js"

const App= () => {

const [personState,setPersonState]= useState({
  person1:["Alex",20],
  person2:["Diana",21]
  });

const nameHandler= () => {

 setPersonState({
    person1:["Fereshte",28],
    person2:["Diana",40]
    })
}

  return <div className="App">
  <h1>Hi, I am a react App.</h1>
  <button onClick={nameHandler}>Update Names</button>
  <Person name={personState.person1[0]}  age={personState.person1[1]}/>
  <Person name={personState.person2[0]}  age={personState.person2[1]}>The sister</Person>
</div>




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
