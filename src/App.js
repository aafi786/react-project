import React, { Component } from 'react';
import Navbarpro from "./components/Navbar";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./components/Home";
import Contact from "./components/Contact";
import Main from "./components/Main";


import './App.css';


class App extends Component {



  render() {

    return (
      <BrowserRouter>
        <div className="App">
          <Navbarpro />
          <Route exact path="/" component={Main} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/contact" component={Contact} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
