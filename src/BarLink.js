import React from 'react';
import './Bar.css';

class BarLink extends React.Component {

    render(){
        return (
            <div>
                <a className='barLink' href={this.props.href} id={this.props.id}>{this.props.text}</a>
            </div>
        )
    }
}

export default BarLink;