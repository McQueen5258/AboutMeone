import React from 'react';
import './Contact.css';
import ContactData from './Contact-data.json';
import { useTranslation } from 'react-i18next';
import '../../i18n';

import Button from '@material-ui/core/Button';

function Contact(props) {
    const [t, i18n] = useTranslation();
    return (
        <Button className='contact-mode' variant="outlined" color="primary" href={ContactData[props.mode].href}>
            {t("LET'S CHAT")}
        </Button>
    );
}

export default Contact;