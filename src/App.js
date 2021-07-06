import React from 'react';

import Bar from './Bar.js';

import Footer from './components/Footer/Footer';

import Home from "./components/BarLink/Home";
import About from "./components/BarLink/About";
import Portfolio from "./components/BarLink/Portfolio";
import Contact from "./components/BarLink/Contact";

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

function App() {
    return (
        <Router>
            {/* 导航栏 */}
            {/* <Bar id="bar" /> */}
            <div id="bar">
                <div>
                    <Link className="barLink" to="/">Home</Link>
                </div>
                <div>
                    <Link className="barLink" to="/About">About</Link>
                </div>
                <div>
                    <Link className="barLink" to="/Portfolio">Portfolio</Link>
                </div>
                <div>
                    <Link className="barLink" to="/Contact">Contact</Link>
                </div> 
            </div>
            
            <Switch>
                
                <Route path="/About" >
                    <About />
                </Route>
                <Route path="/Portfolio">
                    <Portfolio />
                </Route>
                <Route path="/Contact">
                    <Contact/>
                </Route>
                <Route path="/" >
                    <Home />
                </Route>
            </Switch>

             {/* 页脚 */}
            <Footer />
        </Router>
    );
}
export default App;



// {/* <Route path="/Basic" component= {Basic}/> */}
// {/* <Link to="/Basic">Basic</Link> */}