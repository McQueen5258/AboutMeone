import React, { Component, useContext, createContext, MyContext } from 'react';
import './Theme.css';
import {themeContext} from '../../App';
import { IconButton } from '@material-ui/core';
import Dark from '@material-ui/icons/Brightness4';
import Light from '@material-ui/icons/Brightness7';
import { orange, purple } from '@material-ui/core/colors';

// const themeContext = createContext(null);
function mode(mode) {

    console.log("厉害了，真的可以");
}
function themeBtn(theme, setTheme) {
    if (theme == 'light') {
        // Set 'Dark' theme
        setTheme('dark');
        
    } else {
        // Set 'Light' theme
        setTheme('light');
    }
    mode(theme,"hhh");
}
export default function Theme() {
    // let value = this.context;
    // const contextType = MyContext;
    const { theme, setTheme } = React.useContext(themeContext)
        
    return (
        <IconButton 
            variant="outlined"
            // variant="contained"
            className={`theme-btn theme0btn-$(theme)`}
            onClick={() => themeBtn(theme, setTheme)}
            // onClick={() => () => mode(theme)}
            // style={{
            //     backgroundImage: 'url(./image/themebtn/'+theme+".svg)",
            //     transition: "all 1s"
            // }} 
            >
        {/* {this.context} */}
        {/* test */}
        {
            theme == "light"?
                <Dark style={{ color: orange[500] }}
                variant="outlined"
                />
            :
                <Light style={{ color: orange[500] }}
                variant="outlined"
                />
        }
        </IconButton>
    );
}

