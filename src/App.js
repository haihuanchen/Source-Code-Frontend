import React from 'react';
import './App.css';
import MainContainer from './Containers/MainContainer';
import CreateAccount from './Components/CreateAccount';
import NavBar from './Components/NavBar';
// import { Route, Switch } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={"https://secure.i.telegraph.co.uk/multimedia/archive/02837/internet_2837932b.jpg"} className="App-logo" alt="logo" /> */}
        <NavBar/>
        <CreateAccount />
        <MainContainer/>
      </header>
    </div>
  );
}
export default App;