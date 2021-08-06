import logo from './logo.svg';
import './App.css';
import React from "react";

function App() {
  const justVar = <h1>Привет, мир!</h1>;
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {justVar}
        {greeting}
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

function formatName(user) {
  return user.firstName + ' ' + user.lastName;
}

function getGreeting(user) {
    if (user) {
        return <h1>Здравствуй, {formatName(user)}!</h1>;
    }
    return <h1>Здравствуй, незнакомец.</h1>;
}

const user = {
  firstName: 'Марья',
  lastName: 'Моревна'
};

const greeting = (
    <h1>
      Здравствуй, {getGreeting(user)}!
    </h1>
);

export default App;
