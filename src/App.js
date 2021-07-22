import React, { useState, createContext, useContext, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import './i18n';
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
            <themeContext.Provider value={{theme, setTheme}} >
            <div className={`${theme}`}>
            <div 
                onClick={()=>i18n.changeLanguage(i18n.language=='en'?'zh':'en')
            }
            style={{
                position: "fixed",
                top: "115px",
                right: "30px",
                zIndex: "1"
            }}
            >
                <div 
                    style={
                        {
                            backgroundImage:"url('image/translation/翻译.svg')",
                            backgroundSize: "100%",
                            backgroundPosition: 'center',
                            height: "30px",
                            width: "30px",
                        }
                    }
                ></div>
                <div>
                {/* {i18n.language=='en'?'zh':'en'} */}
                </div>
            </div>
            {/* 导航栏 */}
            {/* <Bar id="bar" /> */}
            <div id="bar">
                <div>
                    <Link className="barLink" to="/">{t('Home')}</Link>
                </div>
                <div>
                    <Link className="barLink" to="/about">{t('About')}</Link>
                </div>
                <div>
                    <Link className="barLink" to="/portfolio">{t('Portfolio')}</Link>
                </div>
                <div>
                    <Link className="barLink" to="/contact">{t('Contact')}</Link>
                </div>
            </div>
            <Theme 
                style={{
                    position: "fixed",
                    top: "60px",
                    right: "10px"
                }}
            />
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