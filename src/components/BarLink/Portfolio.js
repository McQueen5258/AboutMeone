import React, { Component } from 'react';
import DisplayWall from '../DisplayWall/DisplayWall';
import './Porfolio.css';
import Footer from '../Footer/Footer';

export default class Porfolio extends Component {
        render() {
        return (
            <div id="porfolioPage">
                {/* Exhibition works */}
                <DisplayWall />
                <Footer ThemeColor={"rgb(57, 117, 119)"}/>
            </div>
        );
    }
}
