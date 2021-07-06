import React, { Component } from 'react';
import DisplayWall from '../DisplayWall/DisplayWall';
import './Porfolio.css';
export default class Porfolio extends Component {
        render() {
        return (
            <div id="porfolioPage">
                {/* Exhibition works */}
                <DisplayWall />
            </div>
        );
    }
}
