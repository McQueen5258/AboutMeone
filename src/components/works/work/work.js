import React, { Component } from 'react';
import './work.css';


export default class Work extends Component {
    constructor(props){
        super(props)
        
    }
    render() {
        let sectionStyle ={
                backgroundImage:"url("+this.props.img+")",
                backgroundSize:"100% 100%",
                backgroundPosition:"center",
                backgroundRepeat:"repeat",
                display:"flex",
                justifyContent: "center",
                alignItems: "flex-end"

        }
        let divStyle = {
            width: "100%",
            height: "40px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontSize: "20px",
            color: "black",
            backgroundColor:"rgb(255 4 39 / 69%)"
        }
        return (
            <div className="work">
                <a href={this.props.href} className="workLink">
                    <div style={sectionStyle}>
                        <div style={divStyle}>
                            {this.props.name}
                        </div>
                    </div>
                </a>
            </div>
        );
    }
}

