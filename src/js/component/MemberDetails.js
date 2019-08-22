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

        let primaryMemberPlanID, memberID;
        if (history.state.state.type) {
            console.log(history.state);
            primaryMemberPlanID = history.state.state.primaryMemberPlanID;
            memberID = history.state.state.memberID;
            console.log('MemberDetails memberPlanId - ', memberID);
        } else {
            const result = history.state.state;
            primaryMemberPlanID = result.result.primaryMemberPlanID;
            memberID = history.state.state.memberID;
            console.log('State::: ', history.state.state);
        }
        console.log('Inside MemberDetails:: ', history.state.state.primaryMemberPlanID);
        this.state = {
            primaryMemberPlanID: history.state.state.primaryMemberPlanID,
            memberID: history.state.state.memberID,
            aetnaCumbId: history.state.state.aetnaCumbId,
            memberPlanId : history.state.state.memberPlanId
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
                        <Col xs={6} md={1}>
                        <Image title="Back" src="../../../images/brokenArrowBack.jpg" style={{ width: 40, height: 40 }} />
                        </Col>
                    </Row>
                    <br />
                    <br />
                    <br />
                    <Row>
                        <Col md={1}></Col>
                        <Col md={4}><Link to={{
                            pathname: '/member',
                            state: { aetnaCumbId: this.state.aetnaCumbId, type: 'return' }
                        }}></Link></Col>

                        {/* <Col md={4}></Col>
                        <Col><Link to={{
                            pathname: '/dc',
                            state: { memberID: this.state.memberID }
                        }}><Image title="Digital Coaching" src="../../../images/brokenArrow.jpg" style={{ width: 40, height: 40 }} /></Link></Col> */}
                    </Row>
                    <hr />
                    <Row>
                        <Col xs={6} md={2}></Col>
                        <Col xs={6} md={1}>
                            <Thumbnail title="Monitered Events" src="../../../images/clock.png" />
                            <h4><Link to={{
                                pathname: '/service',
                                state: { memberID: this.state.memberID, name: 'HealthActions' }
                            }}>Health Actions</Link></h4>
                            <p>Description</p>
                        </Col>
                        <Col xs={6} md={2}></Col>
                        <Col xs={6} md={1}>
                            <Thumbnail title="HRA" alt="80x80" src="../../../images/Human.png" />
                            <h4><Link to={{
                                pathname: '/service',
                                state: { memberID: this.state.memberID, name: 'HealthAssessments' }
                            }}>HRA</Link></h4>
                            <p>Description</p>
                        </Col>
                        <Col xs={6} md={2}></Col>
                        <Col xs={6} md={1}>
                            <Thumbnail title="Rewards" alt="80x80" src="../../../images/heart.png" />
                            <h4><Link to={{
                                pathname: '/service',
                                state: { memberID: this.state.memberID, name: 'Reward' }
                            }}>Rewards</Link></h4>

                            <p>Description</p>
                        </Col>
                    </Row>
                    <hr />
                    <Row>
                        <Col xs={6} md={2}></Col>
                        <Col xs={6} md={1}>
                            <Thumbnail title="Incentives" src="../../../images/Hand-with-Trophy-Icon.png" />
                            <h4><Link to={{
                                pathname: '/service',
                                state: { memberID: this.state.primaryMemberPlanID, name: 'Rewards Center' }
                            }}>Reward Center</Link></h4>
                            <p>Description</p>
                        </Col>
                        <Col xs={6} md={2}></Col>
                        <Col xs={6} md={1}>
                            <Thumbnail title="Heart Balance" alt="80x80" src="../../../images/trackers.png" />
                            <h4><Link to={{
                                pathname: "/service",
                                state: { memberID: this.state.memberID, name: 'Health Trackers' }

                            }}>Trackers</Link></h4>
                            <p>Description</p>
                        </Col>
                        <Col xs={6} md={2}></Col>
                        <Col xs={6} md={1}>
                            <Thumbnail title="Sweepstakes" alt="80x80" src="../../../images/sweepstakes.jpg" />
                            <h4><Link to={{
                                pathname: '/service',
                                state: { memberID: this.state.memberID, name: 'SWEEPSTAKES' }
                            }}>Sweepstakes</Link></h4>
                            <p>Description</p>
                        </Col>
                    </Row>
                </Grid>
            </div>
        )
    }
}