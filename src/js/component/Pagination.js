"use strict";
import 'babel-polyfill';
require('es6-promise').polyfill();
import React from 'react';
_ = require('lodash');
import { Button } from 'react-bootstrap';


export default class Pagination extends React.Component {

    constructor(props) {
        super(props);
        console.log(this.props.result);
        this.state = {
            currentPage: 1, //for pagination
            todosPerPage: 5 //for pagination
        }
        // this.handleClick = this.handleClick.bind(this);//for pagination
    }


    componentWillMount() {
        console.log('In Pagination component');
        console.log(this.props.result);
    }
    render() {
        const { currentPage, todosPerPage } = this.state;
        const indexOfLastTodo = currentPage * todosPerPage;
        const indexOfFirstTodo = indexOfLastTodo - todosPerPage;
        const pageNumbers = [];
        for (let i = 1; i <= Math.ceil(this.props.result.length / todosPerPage); i++) {
            pageNumbers.push(i);
        }

        return (
            <div>{
                pageNumbers.map(number => {
                    return (

                        <Button className="page-button"
                            key={number}
                            id={number}
                            onClick={this.props.buttonClick}
                        >
                            {number}
                        </Button>
                    );
                })
            }
            </div>

        )
    }
}
