import React from 'react';

import Bar from './Bar.js';

import Footer from './components/Footer/Footer';

import Home from "./components/BarLink/Home";
import About from "./components/BarLink/About";
import Portfolio from "./components/BarLink/Portfolio";
import Contact from "./components/BarLink/Contact";

import {
    BrowserRouter as Router,
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
                    <Link className="barLink" to="">Home</Link>
                </div>
                <div>
                    <Link className="barLink" to="About">About</Link>
                </div>
                <div>
                    <Link className="barLink" to="Portfolio">Portfolio</Link>
                </div>
                <div>
                    <Link className="barLink" to="Contact">Contact</Link>
                </div> 
            </div>
            

            <Route path="/" component = {Home}/>
            <Route path="/About" component = {About}/>
            <Route path="/Portfolio" component = {Portfolio}/>
            <Route path="/Contact" component = {Contact}/>
            

             {/* 页脚 */}
            <Footer />
        </Router>
    );
}
export default App;



// {/* <Route path="/Basic" component= {Basic}/> */}
// {/* <Link to="/Basic">Basic</Link> */}