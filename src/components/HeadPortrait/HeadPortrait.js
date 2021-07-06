import React from 'react';
import './HeadPortrait.css';


class HeadPortrait extends React.Component {

    render(){
        return(
            <div id='head-portrait' style={{backgroundImage: "url(image/HPImage/Eric.jpg)"}}></div>
        );
    }
}

export default HeadPortrait;