'use strict';

import '../css/styles.css';
import '../css/global-nav.css';

import React from 'react';
import ReactDOM from 'react-dom';

import { Button } from 'react-bootstrap';

const props = {
    className: 'container',
    children: 'Hello Rajeev'
};
// Below function renders a div, lets call into an element.
const Message = props => <div> Hello {props.children}</div>


// Rendering a method in an element.
const element = (<div className = "container">
    <Message>Good Bye</Message>
    <Message>Hi Rajeev</Message>
</div>);


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
