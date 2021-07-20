import React, { Component, lazy, Suspense } from 'react';
// import DisplayWall from '../DisplayWall/DisplayWall';
import './Porfolio.css';
import Footer from '../Footer/Footer';
import Loading from '../Loading/Loading';
import { useTranslation } from 'react-i18next';

import '../../i18n';
const DisplayWall = lazy(() => import('../DisplayWall/DisplayWall'));

export default function Porfolio() {
    const { t, i18n } = useTranslation();

        return (
            <div id="porfolioPage">
                {/* Exhibition works */}
                <Suspense 
                    fallback={
                        <Loading />
                    }>
                    <DisplayWall />
                </Suspense>
                <Footer ThemeColor={"rgb(57, 117, 119)"}/>
            </div>
        );
    }
