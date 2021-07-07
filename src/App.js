import React from 'react';

import Bar from './Bar.js';


import Home from "./components/BarLink/Home";
import About from "./components/BarLink/About";
import Portfolio from "./components/BarLink/Portfolio";
import Contact from "./components/BarLink/Contact";
import Error from './components/BarLink/error';

import './App.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect,
    useLocation
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
                    <Link className="barLink" to="/about">About</Link>
                </div>
                <div>
                    <Link className="barLink" to="/portfolio">Portfolio</Link>
                </div>
                <div>
                    <Link className="barLink" to="/contact">Contact</Link>
                </div>
            </div>

            <Switch>
                <Route exact path="/" >
                    <Home />
                </Route>
                <Route path="/about" >
                    <About />
                </Route>
                <Route path="/portfolio">
                    <Portfolio />
                </Route>
                <Route path="/contact">
                    <Contact />
                </Route>
                <Route path="*">
                    {/* <NoMatch /> */}
                    <Error />

                </Route>
            </Switch>

        </Router>
    );
}
// function NoMatch() {
//     let location = useLocation();

//     return (
//         <div>
//             <h3>
//                 No match for <code>{location.pathname}</code>
//             </h3>
//         </div>
//     );
// }
export default App;



// {/* <Route path="/Basic" component= {Basic}/> */}
// {/* <Link to="/Basic">Basic</Link> */}