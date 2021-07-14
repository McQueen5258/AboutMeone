import React, { Component, useContext, createContext, MyContext } from 'react';
import './Theme.css';
import {themeContext} from '../../App';
// const themeContext = createContext(null);

function themeBtn(theme, setTheme) {
    if (theme == 'light') {
        // Set 'Dark' theme
        setTheme('dark');
        
    } else {
        // Set 'Light' theme
        setTheme('light');
    }
}
export default function Theme() {
    // let value = this.context;
    // const contextType = MyContext;
    const { theme, setTheme } = React.useContext(themeContext)

    return (
        <div 
            className={`theme-btn theme0btn-$(theme)`}
            onClick={() => themeBtn(theme, setTheme)}
            style={{
                backgroundImage: 'url(./image/themebtn/'+theme+".svg)",
                transition: "all 1s"
            }} >
        {/* {this.context} */}
        {/* test */}
        </div>
    );
}

