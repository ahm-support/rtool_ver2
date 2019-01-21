"use strict";
import 'babel-polyfill';
require('es6-promise').polyfill();
import React from 'react';
const _ = require('lodash');
import Moment from 'moment';
import { Link } from 'react-router-dom';
import { Table, Col } from 'react-bootstrap';

export default class Trackerstbl extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            result: [],

        }
    }

    componentWillMount() {
        console.log('Component Mount in Trackertbl');
        console.log(this.props);
        // this.setState({ state: this.props });
    }

    render() {
        var data = [];
        data = this.props.result;
        console.log(data.result);
        return (<Table responsive>
            <thead>
                <tr>
                    <th>MEMBERID</th>
                    <th>MEMBERREPORTEDDEVICETYPE</th>
                    <th>DEVICETRACKEDFLG</th>
                    <th>MEMBERREPORTEDMEASUREMENTTYPE</th>
                    <th>MEASUREMENTSUBTYPE</th>
                    <th>DATASOURCENM</th>
                    <th>VENDORSOURCENM</th>
                    <th>MEMBERREPORTEDMEASUREMENTDT</th>
                    <th>RECORDINSERTDT</th>
                    <th>RECORDUPDTDT</th>
                    <th>TRANSACTIONDT</th>
                </tr>
                {
                    data.result.map(function (member, i) {
                        return <tr><td>{member.MEMBERID}</td>
                            <td>{member.MEMBERREPORTEDDEVICETYPE}</td>
                            <td>{member.DEVICETRACKEDFLG}</td>
                            <td>{member.MEMBERREPORTEDMEASUREMENTTYPE}</td>
                            <td>{member.MEASUREMENTSUBTYPE}</td>
                            <td>{member.DATASOURCENM}</td>
                            <td>{member.VENDORSOURCENM}</td>
                            <td>{member.MEMBERREPORTEDMEASUREMENTDT === null ? null : Moment(member.MEMBERREPORTEDMEASUREMENTDT).format("DD/MM/YYYY")}</td>
                            <td>{member.RECORDINSERTDT === null ? null : Moment(member.RECORDINSERTDT).format("DD/MM/YYYY")}</td>
                            <td>{member.RECORDUPDTDT === null ? null : Moment(member.RECORDUPDTDT).format("DD/MM/YYYY")}</td>
                            <td>{member.TRANSACTIONDT === null ? null : Moment(member.TRANSACTIONDT).format("DD/MM/YYYY")}</td>

                        </tr>
                    })
                }
            </thead>
        </Table>
        )
    }
}