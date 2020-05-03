import React from 'react';
import './App.css';
import MainContainer from './Containers/MainContainer';
// import Login from './Container/UserLogin';
// import NavBar from './Container/Components/NavBar';
// import { Route, Switch } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={"https://secure.i.telegraph.co.uk/multimedia/archive/02837/internet_2837932b.jpg"} className="App-logo" alt="logo" />
        <MainContainer/>
        {/* <Login/> */}
        {/* <NavBar/> */}
      </header>
    </div>
  );
}
export default App;