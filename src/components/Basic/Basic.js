import React from 'react';
import './Basic.css';

import BasicTicket from '../BasicTicket/BasicTicket';

class Basic extends React.Component {

    render(){
        return(
            <div id='basic'>
                <BasicTicket />
            </div>
        );
    }
}

export default Basic;