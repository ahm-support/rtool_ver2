'use strict';

import '../src/css/styles.css';
import '../css/global-nav.css';

import React from 'react';
import ReactDOM from 'react-dom';

import { Button } from 'react-bootstrap';

const props = {
    className: 'container',
    children: 'Hello Rajeev'
};

const content = 'Hello Rajeev B';
const element = (<div {...props}/>);

class App extends React.Component {

    render() {
        return (
            element
        );
    }
}

ReactDOM.render(
    <App/>, document.getElementById('app')
);
