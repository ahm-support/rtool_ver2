"use strict";
import 'babel-polyfill';
require('es6-promise').polyfill();
import React from 'react';
const _ = require('lodash');
import Moment from 'moment';
import { Link } from 'react-router-dom';
import { Table, Col } from 'react-bootstrap';

export default class HRAtbl extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            result: [],
           
        }
    }

    componentWillMount() {
        console.log('Component Mount in HRAtbl');
        console.log(this.props);
       // this.setState({ state: this.props });
    }

    render() {
        var data = [];
        data = this.props.result;
        console.log(data.result);  
        return (
            <Table responsive>
                <thead>
                    <tr>
                        <th>HRAASSMNTID</th>
                        <th>DATASOURCENM</th>
                        <th>SURVEYNM</th>
                        <th>SURVEYSTATUS</th>
                        <th>RECORDUPDTDT</th>
                        <th>INSERTEDBY</th>
                        <th>VENDORSOURCENM</th>
                        <th>COMPLETIONDT</th>
                        <th>LOCATIONSOURCENM</th>
                    </tr>
                    {
                        data.result.map(function (member, i) {
                            return <tr><td>{member.HRAASSMNTID}</td>
                                <td>{member.DATASOURCENM}</td>
                                <td>{member.SURVEYNM}</td>
                                <td>{member.SURVEYSTATUS}</td>
                                <td>{Moment(member.RECORDUPDTDT).format("DD/MM/YYYY")}</td>
                                <td>{member.INSERTEDBY}</td>
                                <td>{member.VENDORSOURCENM}</td>
                                <td>{member.COMPLETIONDT === null ? null : Moment(member.COMPLETIONDT).format("DD/MM/YYYY")}</td>
                                <td>{member.LOCATIONSOURCENM}</td>
                            </tr>
                        })
                    }
                </thead>
                <Col>
                    <Link to={{ pathname: "memberDetails", state: this.props }}>Member Response</Link>
                </Col>
            </Table>
        )

    }
}
