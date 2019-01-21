/**
 * Created by RBhatnagar on 3/16/2018.
 */

'use strict';
import React from 'react';
import {Table, Grid, Col, Row} from 'react-bootstrap';
import ReactJson from 'react-json-viewer';
import {Link} from 'react-router-dom';
const _ = require('lodash');
export default function DataView(props) {
    var data = [];
    data = props.res;
    console.log("Rajeev Here...", props.res);
    return (
        <div>
            <Grid>
                <Row>
                    <Col><ReactJson json={data}/></Col>
                </Row>
            </Grid>
        </div>
    )
}

