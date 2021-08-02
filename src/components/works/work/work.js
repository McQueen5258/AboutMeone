import React, { Component } from 'react';
import './work.css';
import Card from '@material-ui/core/Card';

let divStyle, sectionStyle;
export default class Work extends Component {
    constructor(props){
        super(props)
        this.mOver = this.mOver.bind(this);
        // this.divStyle = this.divStyle.bind(this);
        
    }

    mOver(e) {
        // console.log(this);
        // divStyle.transform = "translateY(0px)";
        // console.log(e.target.children[0].style.transform);
        // e.target.children[0].style.transform = "translateY(0px)";
    }
    render() {
        sectionStyle ={
                backgroundImage:"url("+this.props.img+")",
                backgroundSize:"100% 100%",
                backgroundPosition:"center",
                backgroundRepeat:"repeat",
                display:"flex",
                justifyContent: "center",
                alignItems: "flex-end"

        }
        divStyle = {
            width: "100%",
            height: "40px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontSize: "20px",
            color: "wheat",
            backgroundColor:"rgb(57, 117, 119, 0.69)",
            // transform: "translateY(40px)"
        }
        return (
            <Card className="work">
                <a href={this.props.href} className="workLink">
                    <div style={sectionStyle} onMouseEnter={(e) => this.mOver(e)} >
                        <div style={divStyle}>
                            {this.props.name}
                        </div>
                    </div>
                </a>
            </Card>
        );
    }
}

