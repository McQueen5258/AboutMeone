import React from 'react';
import './Contact.css';
import ContactData from './Contact-data.json';
import { useTranslation } from 'react-i18next';
import '../../i18n';
function Contact(props) {
    const [t, i18n] = useTranslation();
    return (
        <div className='contact-mode'>
            <a href={ContactData[props.mode].href}>{t("LET'S CHAT")}</a>
        </div>
    );
}

export default Contact;