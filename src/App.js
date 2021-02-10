import './App.scss';
import React from 'react';

import { BrowserRouter, Route, Switch } from "react-router-dom";
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Home from './components/Home/Home';
import Resume from './components/Resume/Resume';
import ThemeChanger from './components/ThemeChanger/ThemeChanger';
import Portfolio from './components/Portfolio/Portfolio';
import Services from './components/Services/Services';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div className="toggle">
          <ThemeChanger />
        </div>
          <Switch>
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            <Route path="/resume" component={Resume} />
            <Route path="/portfolio" component={Portfolio} />
            <Route path="/services" component={Services} />
            <Route path="/" component={Home} />
          </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
