import React from 'react';
import './ProgressBar.css';
class ProgressBar extends React.Component {


    render(){
        let style = {width:this.props.progress}
        return(
            <div className="progress progress-sm">
                <div className="progress-bar" style={style} role="progressbar"  aria-valuenow="85" aria-valuemin="0" aria-valuemax="100">
                </div>   
            </div>
            
        );
    }
}

export default ProgressBar;

// style='width:'{this.props.progress}