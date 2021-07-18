import React,{lazy} from 'react';
import './Basic.css';
import '../../ThemeStyle.css';

import { themeContext } from '../../App';

const BasicTicket = lazy(() => import('../BasicTicket/BasicTicket'));


function Basic() {
    const { theme, setTheme } = React.useContext(themeContext)

    return (
        <div id='basic' className={"Basic Basic-"+theme}  style={{ backgroundImage: "url(image/abstract06.jpg)" }}>
            <BasicTicket />
        </div>
    );
}

export default Basic;