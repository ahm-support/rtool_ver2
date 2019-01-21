'use strict';

import '../css/styles.css';
import '../css/global-nav.css';

import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

import {ButtonToolbar, Button} from 'react-bootstrap';
import fetch from 'isomorphic-fetch';


import Facts from './component/facts';


class App1 extends React.Component {
    constructor(props) {
       super(props);
        this.state = {
            facts: [],
        }
    }

    componentDidMount() {
        console.log('Hello Rajeev');

        fetch("https://student-example-api.herokuapp.com/v1/facts",
            {
                method: 'get',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            }).then(response => response.json()).then( json =>
            this.setState ({
                facts: json.facts

            })
        )

    }

        render() {
            return (
            <div>
                <Facts facts={this.state.facts} />
            </div>

            )
        }

}

export default App1;

/*
ReactDOM.render(
    <App1/>, document.getElementById('app')
);
*/
