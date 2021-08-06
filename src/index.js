import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Welcome} from './Components';
import {Welcome2} from './Components';
import reportWebVitals from './reportWebVitals';
import {Clock} from "./Cloak";
import {NameForm} from "./NameForm";
import {EssayForm} from "./EssayForm";
import {FlavorForm} from "./FlavorForm";
import {Reservation} from "./Reservation";
import {Calculator} from "./Calculator";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

function tick() {
  const element = (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {new Date().toLocaleTimeString()}.</h2>
      </div>
  );
  ReactDOM.render(element, document.getElementById('cloak'));
}

const welcome = <Welcome name="Алиса" />;
ReactDOM.render(
    welcome,
    document.getElementById('root2')
);

const welcome2 = <Welcome2 name="Алиса" />;
ReactDOM.render(
    welcome2,
    document.getElementById('root3')
);

ReactDOM.render(
    <Clock />,
    document.getElementById('cloak2')
);

ReactDOM.render(
    <NameForm />,
    document.getElementById('named')
);

ReactDOM.render(
    <EssayForm />,
    document.getElementById('easy')
);

ReactDOM.render(
    <FlavorForm />,
    document.getElementById('flavor')
);

ReactDOM.render(
    <Reservation />,
    document.getElementById('reservation')
);

ReactDOM.render(
    <Calculator />,
    document.getElementById('calc')
);

setInterval(tick, 1000);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
