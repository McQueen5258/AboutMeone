import React from 'react';
import './Skill.css';

import ProgressBar from '../ProgressBar/ProgressBar';
class Skill extends React.Component {

    render(){
        return(
            <div className='skill'>
                <div className='skill-title'>
                    <p className='skill-title'>{this.props.title}</p>
                    <p className='skill-percentage'>{this.props.progress}</p>
                </div>
				<ProgressBar progress={this.props.progress}/>
            </div>
        );
    }
}

export default Skill;