import React, { Component, lazy, Suspense } from 'react';
import Footer from '../Footer/Footer';

import '../About/About.css';
// import PageLogo from '../pageLogo/PageLogo';
import Loading from '../Loading/Loading';
const PageLogo = lazy(() => import('../pageLogo/PageLogo'));

export default class About extends Component {
  render() {
    return (
        <div>
          <Suspense fallback={<Loading />} >
          {/* style={{ backgroundImage: "url(image/WorkImg/合作开发网站.png)" }} */}
          <div className="aboutMe" style={
            {
              backgroundImage: "url(image/01151148_f90170be11.jpeg)"
            }} >
            <div className="about-title">
              <h1>ABOUT ME</h1>
              <PageLogo />
            </div>


            <div className="AboutMe-text">
              <p>你好呀，我是艾克。</p>
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
}
