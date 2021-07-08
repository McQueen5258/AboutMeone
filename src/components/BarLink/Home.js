import React, { Component } from 'react';
import Basic from '../Basic/Basic';
import Skills from '../Skills/Skills';
import Footer from '../Footer/Footer';


export default class Home extends Component {
  render() {
    return (
    <div>
     {/* 基本信息 */}
    <Basic id="basic" />
     {/* My skills */}
    <Skills className="skills" />
    <Footer ThemeColor={"rgb(288, 4, 81)"}/>
    </div>
    );
  }
}

// {/* contact information */}
// {/* <Contacts /> */}

