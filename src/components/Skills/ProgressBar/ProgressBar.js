import React from 'react';
// import './ProgressBar.css';

import LinearProgress from '@material-ui/core/LinearProgress';
import { makeStyles, withStyles } from '@material-ui/core/styles';


const BorderLinearProgress = withStyles((theme) => ({
    root: {
        height: 10,
        borderRadius: 5,
    },
    colorPrimary: {
        backgroundColor: theme.palette.grey[theme.palette.type === 'light' ? 200 : 700],
    },
    bar: {
        borderRadius: 5,
        backgroundColor: '#1a90ff',
    },
}))(LinearProgress);

class ProgressBar extends React.Component {


    render() {
        let style = { width: this.props.progress }
        
        return (
                <BorderLinearProgress variant="determinate" value={this.props.progress} color="primary" />

        );
    }
}

export default ProgressBar;

// style='width:'{this.props.progress}

{/* <div className="progress progress-sm">
    <div className="progress-bar" style={style} role="progressbar"  aria-valuenow="85" aria-valuemin="0" aria-valuemax="100">
    </div>   
</div> */}