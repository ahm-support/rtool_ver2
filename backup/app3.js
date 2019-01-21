'use strict';

import '../css/styles.css';
import '../css/global-nav.css';

import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

import { Button } from 'react-bootstrap';

const props = {
    className: 'container',
    children: 'Hello Rajeev'
};
// Below Component (function()) renders a div, lets call into an element.
const SayHello = props => <div> {props.firstName} {props.lastName}</div>

//Component validation
/*SayHello.propTypes = {
    firstName(props, propName, componentName){
        if(typeof props[propName] !== 'string'){
            return new Error(`Hey you should pass a string for a  ${propName} and ${componentName} but you passed a typeof ${props[propName]}`)
        }

    }
};*/






class App extends React.Component {

    render() {
        return (
            element
        );
    }
}

// Rendering a method in an element.
const element = (<div className = "span2 span3-xsm span3-sm span2-md inline-block top text-center">
    <h1>Hello:-)</h1>
    <SayHello firstName={'Rajeev'}/>
    <SayHello lastName={'Bhatnagar'}/>
</div>);

ReactDOM.render(
    <App/>, document.getElementById('app')
);
