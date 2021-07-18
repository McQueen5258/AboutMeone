import React, { Component, Suspense } from 'react';
import Footer from '../Footer/Footer';
import '../ContactPage/ContactPage.css';
import Loading from '../Loading/Loading';

export default class Contact extends Component {
  render() {
    return (
      <div>
        <Suspense fallback={<Loading />} >
        <div className="contactPage" style={{backgroundImage:"url(image/WorkImg/正在开发中.png)"}}>

        </div>
        </Suspense>
        <Footer />
      </div>

    );
  }
}
