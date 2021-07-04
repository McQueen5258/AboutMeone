import React from 'react';

import Bar from './Bar.js';
import Basic from './components/Basic/Basic.js';
import Skills from './components/Skills/Skills';
import Footer from './components/Footer/Footer';

function App() {
    return (
        <div>
            {/* 导航栏 */}
            <Bar id="bar" />
            {/* 基本信息 */}
            <Basic id="basic" />
            {/* My skills */}
            <Skills className="skills" />
            {/* contact information */}
            {/* <Contacts /> */}
            {/* 页脚 */}
            <Footer />
        </div>
    );
}
export default App;
