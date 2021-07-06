import React from 'react';
import './Bar.css';
import {
    BrowserRouter as Router,
    Route,
    Link
} from "react-router-dom";
import Portfolio from './components/Portfolio/Portfolio';

class BarLink extends React.Component {

    render(){
        return (
            <Router>
                <Link className='barLink' id={this.props.id} to="/Portfolio">{this.props.text}</Link>
                <Route path="/Portfolio" component = {Portfolio}></Route>
                {/* <a className='barLink' href={this.props.href} id={this.props.id}>{this.props.text}</a> */}
            </Router>
        )
    }
}

export default BarLink;