'use strict';
import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import CustomNavbar from './CustomNavbar';
import SearchMain from './SearchMain';
import '../../css/Home.css';
import {Link} from 'react-router-dom';
import {Jumbotron, Grid, Row, Col, Image, Button} from 'react-bootstrap';
import NavBar from "./NavBar";
export default class Home extends React.Component {
    render() {
        console.log('Inside Home!!');
        return (
            <div>
                <Grid>
                    <Row><NavBar/></Row>
                    <Row>
                        <SearchMain/>
                    </Row>
                </Grid>
            </div>
        )
    }
}