"use strict";
import 'babel-polyfill';
require('es6-promise').polyfill();
import React from 'react';
const _ = require('lodash');
import Moment from 'moment';
import Pagination from '../Pagination';

import { Table, Button, Panel, Col } from 'react-bootstrap';

export default class HAtbl extends React.Component {

    constructor(props) {
        super(props);
        console.log(this.props.result);
        this.state = {
            memberPlanId: '',
            result: [],
            componentName: '',
            currentPage: 1, //for pagination
            todosPerPage: 5 //for pagination
        }
        //  this.handleClick = this.handleClick.bind(this);//for pagination
    }

    changeButtonState(event) {
        console.log('active page is' + Number(event.target.id));
        this.setState({ currentPage: Number(event.target.id) })
    }





    render() {
        const { memberPlanId, result, componentName, currentPage, todosPerPage } = this.state;
        const indexOfLastTodo = currentPage * todosPerPage;
        const indexOfFirstTodo = indexOfLastTodo - todosPerPage;

        var data = [];
        var currentHealthAction = [];
        var pastHealthAction = [];
        var MEList = [];

        data = this.props.result;
        MEList = data.MEList;
        currentHealthAction = _.filter(MEList, { 'CECompletionStatus': 'N', 'MEExpiredFlag': 'N' });
        pastHealthAction = _.filter(MEList, { 'CECompletionStatus': 'Y', 'MEExpiredFlag': 'N' });


        const currentTodos = pastHealthAction.slice(indexOfFirstTodo, indexOfLastTodo);
        console.log('currentTodos' + currentTodos);

        const renderTodos = (<Panel>
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
                                currentTodos.map(function (member, i) {
                                    //  if (_.eq(member.CECompletionStatus, "Y") && _.eq(member.MEExpiredFlag, "N")) {

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

                                })
                            }


                        </thead>
                    </Table>
                    <Col>
                        <div class="page-numbers">
                            <Pagination result={pastHealthAction} buttonClick={this.changeButtonState.bind(this)} />
                        </div>
                    </Col>
                </Panel.Body>
            </Panel.Collapse>
        </Panel>)



        if (_.isEmpty(data.MEList)) {
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
                                    currentHealthAction.map(function (member, i) {

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

                                    })
                                }


                            </thead>
                        </Table>
                    </div>


                    <div>
                        {/* <a onClick={() => this.setState({ open: !this.state.open })}><b></b></a> */}
                        {renderTodos}
                    </div>
                </div >)

        }
    }
}
