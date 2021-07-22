import React, { Component, lazy, Suspense } from 'react';
import Footer from '../Footer/Footer';

import '../About/About.css';
// import PageLogo from '../pageLogo/PageLogo';
import Loading from '../Loading/Loading';
import { useTranslation } from 'react-i18next';
const PageLogo = lazy(() => import('../pageLogo/PageLogo'));

export default function About() {
    const [t, i18n] = useTranslation()
    return (
        <div>
          <Suspense fallback={<Loading />} >
          {/* style={{ backgroundImage: "url(image/WorkImg/合作开发网站.png)" }} */}
          <div className="aboutMe" style={
            {
              backgroundImage: "url(image/01151148_f90170be11.jpeg)"
            }} >
            <div className="about-title">
              <h1>{t('About Me')}</h1>
              <PageLogo />
            </div>


            <div className="AboutMe-text">
              <p>{t("Hello There, I'm Eric")}</p>
            </div>
            <div>

            </div>
          </div>
          

          {/* 页脚 */}
          <Footer ThemeColor="rgb(184, 124, 94)"/>
        </Suspense>
      </div>
    );
  }
