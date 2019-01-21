"use strict";
import 'babel-polyfill';
require('es6-promise').polyfill();
import React from 'react';
const _ = require('lodash');
import Moment from 'moment';
import { Link } from 'react-router-dom';
import { Table, Col } from 'react-bootstrap';

export default class Rewardstbl extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            result: [],

        }
    }

    componentWillMount() {
        console.log('Component Mount in Rewardstbl');
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
                    <th>RewardLevel</th>
                    <th>ActivityLevel</th>
                    <th>AnnualHeartsEarned</th>
                    <th>LifetimeHeartsEarned</th>
                    <th>HeartsBalance</th>
                    <th>HeartsStartPeriod</th>
                    <th>HeartsEndPeriod</th>
                    <th>HeartsConversionRate</th>
                    <th>SweepStakesEndDate</th>
                    <th>SweepstakesScore</th>
                    <th>SweepstakesDonotShow</th>
                </tr>
                {
                    data.result.map(function (member, i) {
                        return <tr><td>{member.RewardLevel}</td>
                            <td>{member.ActivityLevel}</td>
                            <td>{member.AnnualHeartsEarned}</td>
                            <td>{member.LifetimeHeartsEarned}</td>
                            <td>{member.HeartsBalance}</td>
                            <td>{member.HeartsStartPeriod === null ? null : Moment(member.HeartsStartPeriod).format("DD/MM/YYYY")}</td>
                            <td>{member.HeartsEndPeriod === null ? null : Moment(member.HeartsEndPeriod).format("DD/MM/YYYY")}</td>
                            <td>{member.HeartsConversionRate}</td>
                            <td>{member.SweepStakesEndDate === null ? null : Moment(member.SweepStakesEndDate).format("DD/MM/YYYY")}</td>
                            <td>{member.SweepstakesScore}</td>
                            <td>{member.SweepstakesDonotShow}</td>

                        </tr>
                    })
                }
            </thead>
        </Table>
        )
    }
}