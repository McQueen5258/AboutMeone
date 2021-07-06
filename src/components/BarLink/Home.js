import React, { Component } from 'react';
import Basic from '../Basic/Basic';
import Skills from '../Skills/Skills';


export default class Home extends Component {
  render() {
    return (
    <div>
     {/* 基本信息 */}
    <Basic id="basic" />
     {/* My skills */}
    <Skills className="skills" />
    </div>
    );
  }
}

// {/* contact information */}
// {/* <Contacts /> */}

