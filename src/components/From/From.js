import React from 'react';
import './From.css';
import { useTranslation } from 'react-i18next';
import '../../i18n';

function From() {
    const [t, i18n] = useTranslation();
        return(
            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{t('FormText')}</p>
        );
}

export default From;