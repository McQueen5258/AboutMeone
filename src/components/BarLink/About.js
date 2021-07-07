import React, { Component } from 'react';
import Footer from '../Footer/Footer';

import '../About/About.css';
export default class About extends Component {
  render() {
    return (
      <div>
        <div className="aboutMe" style={{backgroundImage:"url(image/WorkImg/合作开发网站.png)"}}>
          {/* <h1>ABOUT ME</h1> */}
          
          
          
          {/* <div className="AboutMe-text">
            <p>你好呀，我是艾克。</p>
          </div>
          <div>

          </div> */}
        </div>

        {/* 页脚 */}
        <Footer />
      </div>
    );
  }
}
