import React from 'react';
import './Information.css';

import Job from '../Job/Job';
import From from '../From/From';
import Contact from '../Contact/Contact';

class Information extends React.Component {

    render() {
        return(
            <div id='information'>
                {/* 我的名字、做什么的。。。 */}
                <Job />
                <div id="border"></div>
                {/* from 来自哪里？ */}
                <From />
                {/* 邮箱联系 */}
                <Contact mode='Email'/>
            </div>
        );
    }
}

export default Information;