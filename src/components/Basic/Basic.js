import React from 'react';
import './Basic.css';

import BasicTicket from '../BasicTicket/BasicTicket';

class Basic extends React.Component {

    render(){
        return(
            <div id='basic' style={{backgroundImage: "url(image/abstract06.jpg)"}}>
                <BasicTicket />
            </div>
        );
    }
}

export default Basic;