import React from 'react';
import BarLink from './BarLink.js';
import './Bar.css';
import {
    BrowserRouter as Router,
    Route,
    Link
} from "react-router-dom";

let arr = [
    {
        href:"",
        id:"Home",
        text:"Home"
    },
    {
        href:"#Growth-title",
        id:"About",
        text:"About"
    },
    {
        href:"",
        id:"Portfolio",
        text:"Portfolio"
    }
    ,{
        href:"",
        id:"Contact",
        text:"Contact"
    }
];
class Bar extends React.Component {
    constructor(props){
        super(props)
        // 创造state状态对象
        this.state = {
            number: 0
        };
    }

    render(){
        let s_arr =arr.map(function(obj,index){
            return(
                <Router>
                <BarLink key={index.toString()} href={obj.href} id={obj.id} text={obj.text} />
                </Router>
            )
        })
        return (
            <div id="bar">
                {s_arr}
            </div>
        );
    }
    
}

export default Bar;