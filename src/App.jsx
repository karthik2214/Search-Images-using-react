import React from 'react';
import About from './components/About';
import Contact from './components/Contact';
import {Route, Switch } from "react-router-dom";
import Error from "./components/Error";
import Navbar from './components/Navbar';
import Search from './components/Search';
import Result from './components/Result';

const App = () => {
  
  
  
  return (
    <>
    <div className="navbar">
    <Navbar />
    </div>
    <Switch>
      <Route exact path='/' component={About} />
      <Route exact path='/Search' component={Search} />
      <Route exact path='/Result' component={Result} />
      <Route exact path='/contact/' component={Contact} />
      <Route path='/contact/:name' component={Contact} />
      <Route component={Error} />
    </Switch>
    </>
    )
}

export default App;