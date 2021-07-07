import React, { Component } from 'react';
import './DisplayWall.css';
import Contents from '../works/Contents';
import Contact from '../Contact/Contact';
export default class DisplayWall extends Component {
    render() {
        return (
            <div className="displayWall" style={{backgroundImage: "url(image/GreenBGIMG.jpeg)"}}>
                <h1>PORTFOLIO</h1>
                <Contents />
                <div>
                    <a style={{
                    color: "wheat",
                    textDecoration: "none",
                    border: "1px solid #919866",
                    borderRadius: "5px"
                    }}
                    href="https://github.com/McQueen5258">MORE</a>
                </div>
            </div>
        );
    }
}
