import React, { Component,lazy } from 'react';
import './DisplayWall.css';
const Contents = lazy(() => import('../works/Contents'));
const Contact = lazy(() => import('../Contact/Contact'));
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
