import React from 'react';
import Basic from '../Basic/Basic';
import Skills from '../Skills/Skills';
import Footer from '../Footer/Footer';
import '../../ThemeStyle.css';
import { themeContext } from '../../App';

export default function Home() {
  const { theme, setTheme } = React.useContext(themeContext)
  
  return (
    <div>
      {/* 基本信息 */}
      <Basic id="basic" />
      {/* My skills */}
      <Skills className="skills" />
      <Footer ThemeColor={"rgb(288, 4, 81)"} />
    </div>
  );
}

// {/* contact information */}
// {/* <Contacts /> */}

