import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// import { w3cwebsocket as W3CWebSocket } from "websocket";

import io from 'socket.io-client';


class App extends Component {

  componentWillMount() {
    this.solution2()
  }

  solution1() {
    const socket = io('http://mediacp.mycom.world:6808');

    socket.on('connect', function () {
      alert("[open] Connection established");
    });
    socket.on('event', function (data) {

    });
    socket.on('disconnect', function () {
      alert('[close] Connection died');
    });
  }

  solution2() {
    let socket = new WebSocket("wss://mediacp.mycom.world:6808");
    socket.binaryType = "arraybuffer";

    socket.onopen = function (e) {
      alert("[open] Connection established");
      alert("Sending to server");
      socket.send("My name is John");
    };

    socket.onmessage = function (event) {
      alert(`[message] Data received from server: ${event.data}`);
    };

    socket.onclose = function (event) {
      if (event.wasClean) {
        alert(`[close] Connection closed cleanly, code=${event.code} reason=${event.reason}`);
      } else {
        // e.g. server process killed or network down
        // event.code is usually 1006 in this case
        alert('[close] Connection died');
      }
    };

    socket.onerror = function (error) {
      alert(`[error] ${error.message}`);
    };

  }


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
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
    )
  }
}


export default App;
