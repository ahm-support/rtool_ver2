"use strict";
import 'babel-polyfill';
require('es6-promise').polyfill();
import React from 'react';
const _ = require('lodash');
import Moment from 'moment';
import { Link } from 'react-router-dom';
import { Table, Col } from 'react-bootstrap';

export default class Incentivestbl extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            result: [],

        }
    }

    componentWillMount() {
        console.log('Component Mount in Incentivestbl');
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
                        <th>PROGRAMNAME</th>
                        <th>REWARDREDEMPTIONHIST</th>
                        <th>TITLE</th>
                        <th>displayRewardRedemptionHistory</th>
                        <th>displayRewardRedemptionHistory</th>
                        <th>displayRewardRedemptionHistory</th>


                    </tr>
                    {
                        data.result.map(function (member, i) {
                            return <tr><td>{member.incentiveProgram.incentiveProgramDisplayName}</td>
                                <td>{member.incentiveProgram.displayRewardRedemptionHistory}</td>
                                <td>{member.incentiveProgram.incentiveDisclaimer}</td>
                                <td>{member.incentiveProgram.incentiveTitle}</td>
                                <td>{member.incentiveProgram.incentiveWelcomeEarnMaternity}</td>
                            </tr>
                        })
                    }
                </thead>
            </Table>
        )
    }
}