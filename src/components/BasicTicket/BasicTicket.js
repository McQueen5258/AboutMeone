import React, {lazy}from 'react';
import './BasicTicket.css';


const HeadPortrait = lazy(() => import('../HeadPortrait/HeadPortrait'));
const Information = lazy(() => import('../Information/Information'));


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