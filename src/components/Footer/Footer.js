import React from 'react';

import './Footer.css';

class Footer extends React.Component {

    render(){
        return(
            <div className='footer' style={{backgroundColor:this.props.ThemeColor}}>
                <p>Copyright © 2020-2021 Eric All rights reserved.</p>
            </div>
        );
    }
}

export default Footer;