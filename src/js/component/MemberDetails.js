/**
 * Created by RBhatnagar on 3/29/2018.
 */

"use strict";
import React from 'react';
import '../../css/CustomLeftNav.css';
import Frame from 'react-frame-component';
import Trackers from '../component/Trackers';

import {
    Grid,
    Col,
    Row,
    Image,
    Thumbnail
} from 'react-bootstrap';
import { Sidebar, SidebarItem, Link } from 'react-router-dom';
import Member from '../component/Member';
import NavBar from "./NavBar";
export default class MemberDetails extends React.Component {
    constructor(props) {
        super(props);

        let memberPlanId;
        if (history.state.state.type) {
            memberPlanId = history.state.state.memberPlanId;
            console.log('MemberDetails memberPlanId - ', memberPlanId);
        } else {
            const result = history.state.state;
            memberPlanId = result.result.PRIMARYMEMBERPLANID;
            console.log('State::: ', history.state.state);
        }
        console.log('Inside MemberDetails:: ', history.state.state.memberPlanId);
        this.state = {
            memberPlanId: history.state.state.memberPlanId,
        };
    }
    render() {
        return (
            <div>
                <Grid className="container-fluid">
                    <Row>
                        <Row><NavBar /></Row>
                        <Col xs={6} md={1}></Col>
                        <Col xs={6} md={3}><h2>Dashboard</h2>
                            <p>Health Recommendation for member</p>
                        </Col>
                    </Row>
                    <br />
                    <br />
                    <br />
                    <Row>
                        <Col md={1}></Col>
                        <Col md={4}><Link to={{
                            pathname: '/member',
                            state: { memberPlanId: this.state.memberPlanId, type: 'return' }
                        }}><Image title="Back" src="../../../images/brokenArrowBack.jpg" style={{ width: 40, height: 40 }} /></Link></Col>

                        <Col md={4}></Col>
                        <Col><Link to={{
                            pathname: '/dc',
                            state: { memberPlanId: this.state.memberPlanId }
                        }}><Image title="Digital Coaching" src="../../../images/brokenArrow.jpg" style={{ width: 40, height: 40 }} /></Link></Col>
                    </Row>
                    <hr />
                    <Row>
                        <Col xs={6} md={2}></Col>
                        <Col xs={6} md={1}>
                            <Thumbnail title="Monitered Events" src="../../../images/clock.png" />
                            <h4><Link to={{
                                pathname: '/service',
                                state: { memberPlanId: this.state.memberPlanId, name: 'Health Actions' }
                            }}>Health Actions</Link></h4>
                            <p>Description</p>
                        </Col>
                        <Col xs={6} md={2}></Col>
                        <Col xs={6} md={1}>
                            <Thumbnail title="HRA" alt="80x80" src="../../../images/Human.png" />
                            <h4><Link to={{
                                pathname: '/service',
                                state: { memberPlanId: this.state.memberPlanId, name: 'Health Assessments' }
                            }}>HRA</Link></h4>
                            <p>Description</p>
                        </Col>
                        <Col xs={6} md={2}></Col>
                        <Col xs={6} md={1}>
                            <Thumbnail title="Rewards" alt="80x80" src="../../../images/heart.png" />
                            <h4><Link to={{
                                pathname: '/service',
                                state: { memberPlanId: this.state.memberPlanId, name: 'Reward' }
                            }}>Rewards</Link></h4>

                            <p>Description</p>
                        </Col>
                    </Row>
                    <hr />
                    <Row>
                        <Col xs={6} md={2}></Col>
                        <Col xs={6} md={1}>
                            <Thumbnail title="Incentive" src="../../../images/incentives.png" />
                            <h4><Link to={{
                                pathname: '/service',
                                state: { memberPlanId: this.state.memberPlanId, name: 'Incentive' }
                            }}>Incentives</Link></h4>
                            <p>Description</p>
                        </Col>
                        <Col xs={6} md={2}></Col>
                        <Col xs={6} md={1}>
                            <Thumbnail title="Heart Balance" alt="80x80" src="../../../images/heart.png" />
                            <h4><Link to={{
                                pathname: "Trackers",
                                state: { memberPlanId: this.state.memberPlanId }

                            }}>Trackers</Link></h4>
                            <p>Description</p>
                        </Col>
                        <Col xs={6} md={2}></Col>
                        <Col xs={6} md={1}>
                            <Thumbnail title="Sweepstakes" alt="80x80" src="../../../images/sweepstakes.jpg" />
                            <h4><Link to={{
                                pathname: '/service',
                                state: { memberPlanId: this.state.memberPlanId, name: 'SWEEPSTAKES' }
                            }}>Sweepstakes</Link></h4>
                            <p>Description</p>
                        </Col>
                    </Row>
                </Grid>
            </div>
        )
    }
}