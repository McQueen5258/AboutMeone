import React from 'react';
import './Contact.css';
import ContactData from './Contact-data.json';

class Contact extends React.Component {

    render(){
        return(
            <div className='contact-mode'>
                <a href={ContactData[this.props.mode].href}>{ContactData[this.props.mode].text}</a>
            </div>
        );
    }
}

export default Contact;