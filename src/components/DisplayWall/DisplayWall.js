import React, { Component, lazy } from 'react';
import './DisplayWall.css';
import '../../i18n';
import { useTranslation } from 'react-i18next';
import { Typography } from '@material-ui/core';

const Contents = lazy(() => import('../works/Contents'));
const Contact = lazy(() => import('../Contact/Contact'));
export default function DisplayWall() {
    const [t, i18n] = useTranslation();
    return (
        <div className="displayWall" style={{ backgroundImage: "url(image/GreenBGIMG.jpeg)" }}>
            <Typography variant="h5" component="h2" className="text">
                {t('portfolio')}
            </Typography>
            <Contents />
            <div>
                <a style={{
                    color: "wheat",
                    textDecoration: "none",
                    border: "1px solid #919866",
                    borderRadius: "5px"
                }}
                    href="https://github.com/McQueen5258">{t('more')}</a>
            </div>
        </div>
    );
}
