"use strict";
import 'babel-polyfill';
require('es6-promise').polyfill();
import React from 'react';
const _ = require('lodash');
import Moment from 'moment';

import { Table, Button, Panel } from 'react-bootstrap';

export default class HAtbl extends React.Component {

    constructor(props) {
        super(props);
        console.log(this.props.result);
        this.state = {
            result: [],
            memberPlanId: '',
            componentName: ''
        }
    }

    render() {
        var data = [];
        data = this.props.result;
        if (!data.MEList) {
            return "You are all set for now.Check back regularly for new health recommendations";
        }
        else {
            return (
                <div>
                    <div>
                        <div><b>Current Health Action</b></div>
                        <Table responsive>
                            <thead>
                                <tr>
                                    <th>METrackingID</th>
                                    <th>MEID</th>
                                    <th>METitle</th>
                                    <th>METypecode</th>
                                    <th>MEImpactableFlag</th>
                                    <th>MEChronic</th>
                                    <th>MERank</th>
                                    <th>MESeverity</th>
                                    <th>MEChangeDate</th>
                                    <th>CECompletionStatus</th>
                                    <th>MEExpiredFlag</th>
                                </tr>
                                {
                                    data.MEList.map(function (member, i) {
                                        if (_.eq(member.CECompletionStatus, "N") && _.eq(member.MEExpiredFlag, "N")) {
                                            return <tr><td>{member.METrackingID}</td>
                                                <td>{member.MEID}</td>
                                                <td>{member.METitle}</td>
                                                <td>{member.METypecode}</td>
                                                <td>{member.MEImpactableFlag}</td>
                                                <td>{member.MEChronic}</td>
                                                <td>{member.MERank}</td>
                                                <td>{member.MESeverity}</td>
                                                <td>{Moment(member.MEChangeDate).format("DD/MM/YYYY")}</td>
                                                <td>{member.CECompletionStatus}</td>
                                                <td>{member.MEExpiredFlag}</td>
                                            </tr>
                                        }
                                    })
                                }


                            </thead>
                        </Table>
                    </div>


                    <div>
                        {/* <a onClick={() => this.setState({ open: !this.state.open })}><b></b></a> */}
                        <Panel>
                            <Panel.Heading>
                                <Panel.Title toggle>
                                    Member Past Health Actions
                                 </Panel.Title>
                            </Panel.Heading>
                            <Panel.Collapse>
                                <Panel.Body>
                                    <Table responsive>
                                        <thead>
                                            <tr>
                                                <th>METrackingID</th>
                                                <th>MEID</th>
                                                <th>METitle</th>
                                                <th>METypecode</th>
                                                <th>MEImpactableFlag</th>
                                                <th>MEChronic</th>
                                                <th>MERank</th>
                                                <th>MESeverity</th>
                                                <th>MEChangeDate</th>
                                                <th>CECompletionStatus</th>
                                                <th>MEExpiredFlag</th>
                                            </tr>
                                            {
                                                data.MEList.map(function (member, i) {
                                                    if (_.eq(member.CECompletionStatus, "Y") && _.eq(member.MEExpiredFlag, "N")) {

                                                        return <tr><td>{member.METrackingID}</td>
                                                            <td>{member.MEID}</td>
                                                            <td>{member.METitle}</td>
                                                            <td>{member.METypecode}</td>
                                                            <td>{member.MEImpactableFlag}</td>
                                                            <td>{member.MEChronic}</td>
                                                            <td>{member.MERank}</td>
                                                            <td>{member.MESeverity}</td>
                                                            <td>{Moment(member.MEChangeDate).format("DD/MM/YYYY")}</td>
                                                            <td>{member.CECompletionStatus}</td>
                                                            <td>{member.MEExpiredFlag}</td>
                                                        </tr>
                                                    }
                                                })
                                            }


                                        </thead>
                                    </Table>
                                </Panel.Body>
                            </Panel.Collapse>
                        </Panel>
                    </div>
                </div >)

        }
    }
}
