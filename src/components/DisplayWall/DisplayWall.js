import React, { Component } from 'react';
import './DisplayWall.css';
import Contents from '../works/Contents';
export default class DisplayWall extends Component {
    render() {
        return (
            <div className="displayWall" style={{backgroundImage: "url(image/abstract06.jpg)"}}>
                <h1>PORTFOLIO</h1>
                <Contents />
            </div>
        );
    }
}
