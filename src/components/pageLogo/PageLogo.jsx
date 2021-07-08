import React, { Component } from "react";
import './PageLogo.css';

export default class PageLogo extends Component {
    render() {
        return (
            <div className="page-logo">
                <div className="line"></div>
                <div className="logoImg" 
                    style={
                        {
                            backgroundImage:"url(image/pageLogo/aboutMe.svg)"
                        }
                    }>
                    </div>
                <div className="line"></div>
            </div>
        );
    }
}
