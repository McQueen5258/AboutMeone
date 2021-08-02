import React, { Component } from 'react';
import './Loading.css';

import CircularProgress from '@material-ui/core/CircularProgress';

export default class Loading extends Component {
    render() {
        return (
            <div className="loading">
                <CircularProgress />
                <h1> Loading. . . </h1>
            </div>
        );
    }
}
