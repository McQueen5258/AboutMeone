import React from 'react';
import './BasicTicket.css';

import HeadPortrait from '../HeadPortrait/HeadPortrait';
import Information from '../Information/Information';


class BasicTicket extends React.Component {

    render(){
        return(
            <div id='basic-ticket'>
                <HeadPortrait />
                <Information />
            </div>
        );
    }
}

export default BasicTicket;