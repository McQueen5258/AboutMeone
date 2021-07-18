import React, { Component, lazy, Suspense } from 'react';
// import DisplayWall from '../DisplayWall/DisplayWall';
import './Porfolio.css';
import Footer from '../Footer/Footer';
import Loading from '../Loading/Loading';
const DisplayWall = lazy(() => import('../DisplayWall/DisplayWall'));



export default class Porfolio extends Component {
        render() {
        return (
            <div id="porfolioPage">
                {/* Exhibition works */}
                <Suspense 
                    fallback={
                        <Loading />
                    }>
                    <DisplayWall />
                </Suspense>
                <Footer ThemeColor={"rgb(57, 117, 119)"}/>
            </div>
        );
    }
}
