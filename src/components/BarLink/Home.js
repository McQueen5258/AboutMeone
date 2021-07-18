import React, {lazy, Suspense} from 'react';
// import Basic from '../Basic/Basic';
// import Skills from '../Skills/Skills';
// import Footer from '../Footer/Footer';
import '../../ThemeStyle.css';
import { themeContext } from '../../App';
import Loading from '../Loading/Loading'; 

const Basic = lazy(() => import('../Basic/Basic'));
const Skills = lazy(() => import('../Skills/Skills'));
const Footer = lazy(() => import('../Footer/Footer'));


export default function Home() {
  const { theme, setTheme } = React.useContext(themeContext)
  
  return (
    <div>
      <Suspense fallback={<Loading />}>

      
        {/* 基本信息 */}
        <Basic id="basic" />
        {/* My skills */}
        <Skills className="skills" />
        <Footer ThemeColor={"rgb(288, 4, 81)"} />
      </Suspense>
    </div>
  );
}

// {/* contact information */}
// {/* <Contacts /> */}

