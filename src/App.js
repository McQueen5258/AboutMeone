import React, { useState, createContext, useContext, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import './i18n';
import { AppBar, IconButton, Button } from '@material-ui/core';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import { Translate } from '@material-ui/icons';
import Slide from '@material-ui/core/Slide';
import PropTypes from 'prop-types';
import Toolbar from '@material-ui/core/Toolbar';




// import i18n from'./i18n'
import Bar from './Bar.js';

import Home from "./components/BarLink/Home";
import About from "./components/BarLink/About";
import Portfolio from "./components/BarLink/Portfolio";
import Contact from "./components/BarLink/Contact";
import Error from './components/BarLink/error';

import Theme from './components/Theme/Theme';
import './App.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
} from "react-router-dom";
export const themeContext = createContext(null);

let first = false;

function HideOnScroll(props) {
    const { children, window } = props;
    // Note that you normally won't need to set the window ref as useScrollTrigger
    // will default to window.
    // This is only being set here because the demo is in an iframe.
    const trigger = useScrollTrigger({ target: window ? window() : undefined });

    return (
        <Slide appear={false} direction="down" in={!trigger}>
            {children}
        </Slide>
    );
}

HideOnScroll.propTypes = {
    children: PropTypes.element.isRequired,
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};


function App() {
    const [theme, setTheme] = useState('light');
    const { t, i18n } = useTranslation();
    // window.onpageshow = function(){
    //     setTheme(localStorage.getItem("lastTheme"));
    // };     

    useEffect(() => {
        // The first time a user enters a web page again, there is no need to modify the local storage
        if (first) {
            localStorage.setItem("lastTheme", theme);
        }
        first = true;
    }, [theme]);
    useEffect(() => {
        // New users don't need to get localStorage when they enter the page for the first time
        if ("null" !== localStorage.getItem("lastTheme")) {
            setTheme(localStorage.getItem("lastTheme"));

        }
    });
    return (
        <Router>
            <themeContext.Provider value={{ theme, setTheme }} >

                <div className={`${theme}`}>
                    <div
                        style={{
                            position: "fixed",
                            top: "70px",
                            right: "30px",
                            zIndex: "1"
                        }}
                    >
                        <Theme /> 
                        <IconButton
                            color='primary'
                            onClick={() => i18n.changeLanguage(i18n.language == 'en' ? 'zh' : 'en')
                            }
                        >
                                <Translate />
                        </IconButton>
                    </div>
                    {/* 导航栏 */}
                    {/* <Bar id="bar" /> */}
                    <HideOnScroll >
                        <AppBar id="bar">
                            <Button style={{
                                textTransform: 'none',
                                height: '100%',
                                width: '100%'
                            }}>
                                <Link className="barLink" to="/">{t('Home')}</Link>
                            </Button>
                            <Button style={{
                                textTransform: 'none',
                                height: '100%',
                                width: '100%'
                            }}>
                                <Link className="barLink" to="/about">{t('About')}</Link>
                            </Button>
                            <Button style={{
                                textTransform: 'none',
                                height: '100%',
                                width: '100%'
                            }}>
                                <Link className="barLink" to="/portfolio">{t('Portfolio')}</Link>
                            </Button>
                            <Button style={{
                                textTransform: 'none',
                                height: '100%',
                                width: '100%'
                            }}>
                                <Link className="barLink" to="/contact">{t('Contact')}</Link>
                            </Button>
                        </AppBar>
                    </HideOnScroll>
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
                </div>
            </themeContext.Provider>
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