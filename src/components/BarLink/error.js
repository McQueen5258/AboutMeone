import React, { Component } from 'react';
import '../Error/Error.css';
import Footer from '../Footer/Footer';
export default class Error extends Component {
  render() {
    return (
      <div>
        <div className="error" style={{ backgroundImage: 'url(image/WorkImg/404.png)' }}>
          {/* <h2>404</h2> */}
        </div>
        <Footer ThemeColor="rgb(212, 219, 228)"/>
      </div>
    );
  }
}
