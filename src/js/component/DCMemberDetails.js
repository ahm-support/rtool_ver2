/**
 * Created by rbhatnagar on 4/20/2018.
 */

"use strict";
import React from 'react';
import '../../css/CustomLeftNav.css';
import Frame from 'react-frame-component';
import {
    Navbar,
    NavItem,
    NavbarBrand,
    Nav,
    NavDropdown,
    MenuItem,
    Button,
    Table,
    Grid,
    Col,
    Row,
    Image,
    Thumbnail
} from 'react-bootstrap';
import {Sidebar, SidebarItem, Link} from 'react-router-dom';
import Member from '../component/Member';
import NavBar from "./NavBar";
export default class DCMemberDetails extends React.Component {
    constructor(props) {
        super(props);

        let memberPlanId;
        let callType;
        console.log('test');
        if (history.state.state.type) {
            console.log('judy teest1', history.state.state.type);
            console.log('test1');
            console.log('memberPlanId>>> getting ', history.state.state.memberPlanId);
            memberPlanId = history.state.state.memberPlanId;
            callType= 'return';
        } else {
            console.log('test2');
            memberPlanId = history.state.state.memberPlanId;
            console.log('test--' + memberPlanId );
        }

        this.state = {
            memberPlanId: memberPlanId,
            callType:callType,
            name:''
        };
    }

    render() {
          return (
            <div>
                <Grid className="container-fluid">
                    <Row>
                    <Row><NavBar /></Row>
                        <Col xs={6} md={2}></Col>
                        <Col xs={6} md={3}><h2>Digital Coaching - </h2>
                            <p>Behaviors, Goals and Activities</p>
                        </Col>
                    </Row>
                    <hr/>
                    <Row>
                        <Col xs={6} md={2}></Col>
                        <Col xs={6} md={1}>
                            <Thumbnail title="Behaviors" src="../../../images/Behavior2.png"/>
                            <h4><Link to={{
                                // pathname: '/dcService',
                                //state: {memberPlanId: this.state.memberPlanId, name: 'behaviors', callType:this.state.callType}
                                pathname: '/dcService',
                                state: {memberPlanId: this.state.memberPlanId, name: 'behaviors'}
                            }}>Behaviors</Link></h4>
                            <p>Description</p>
                        </Col>
                        <Col xs={6} md={2}></Col>
                        <Col xs={6} md={1}>
                            <Thumbnail title="Goals" alt="80x80" src="../../../images/target.png"/>
                            <h4><Link to={{
                                pathname: '/dcService',
                                state: {memberPlanId: this.state.memberPlanId, name: 'goals'}
                            }}>Active Goals</Link></h4>
                            <p>Description</p>
                        </Col>
                        <Col xs={6} md={2}></Col>
                        <Col xs={6} md={1}>
                            <Thumbnail title="Activities" alt="80x80" src="../../../images/running.png"/>
                            <h4><Link to={{
                                pathname: '/dcService',
                                state: {memberPlanId: this.state.memberPlanId, name: 'activities'}
                            }}>Activities</Link></h4>

                            <p>Description</p>
                        </Col>
                    </Row>
                </Grid>
            </div>
        )
    }
}
