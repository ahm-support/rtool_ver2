/**
 * Created by RBhatnagar on 3/27/2018.
 */

"use strict";
import 'babel-polyfill';
import '../../css/CustomLeftNav.css';
import Frame from 'react-frame-component';
require('es6-promise').polyfill();
import React from 'react';
_ = require('lodash');
import NavBar from "./NavBar";
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
import View from './data/DataView';
import Config from '../../common/config.json';
import { returnData, setData, returnComponentData } from '../../common/helper';
import {Sidebar, SidebarItem, Link} from 'react-router-dom';
import Moment from 'moment';

export default class Member extends React.Component {
    constructor(props) {
        super(props);

        let memberPlanId;
        if (history.state.state.type) {
            console.log('in type', history.state.state.type);
            memberPlanId = history.state.state.memberPlanId;
            console.log('MemberResponse memberPlanId - ', memberPlanId);
        } else {
            memberPlanId = history.state.state;
        }

        this.state = {
            memberPlanId: memberPlanId,
            result: []
        }
    }

    componentWillMount() {
        this.callApi(this.state.memberPlanId);
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.location.state != nextProps.location.state) {
            this.callApi(nextProps.location.state);
        }
    }

    componentDidCatch(error, info) {
        console.log("Error: ", error);
    }

    callApi(memberPlanId) {
        //  const restURL = `http://${Config.hostUrl}:${Config.port}${Config.mahServices.member}?app-id=${Config.appId}&memberId=${memberPlanId}`;
        //returnData('fetchData', restURL).then((data) => this.setState({result: data}));
        returnJson("MemberResponse_HRA").then((data) => this.setState({ result: data }));
    }

    render() {

        return (
            <div>
                <Grid className="container-fluid">
                    <Row>
                    <Row><NavBar /></Row>
                        <Col xs={6} md={1}></Col>
                        <Col xs={6} md={3}><h2>HRA Member Response</h2>
                        </Col>
                    </Row>
                    <br/>
                    <br/>
                      <Row>
                        <Col md={1}></Col>
                        <Col md={4}><Link to={{
                            pathname: '/memberDetails',
                            state: {memberPlanId: this.state.memberPlanId, type: 'return'}
                        }}><Image title="Back" src="../../../images/brokenArrowBack.jpg" style={{width: 40, height: 40}}/></Link></Col>
 </Row>
                    <Table responsive>
                        <thead>
                            <tr>
                                <th>HRAASSMNTID</th>
                                <th>MEMBERID</th>
                                <th>HRASOURCEQUESTIONID</th>
                                <th>QUESTIONTEXT</th>
                                <th>HRASOURCEANSWERID</th>
                                <th>ANSWERTEXT</th>
                                <th>RESPONSETEXT</th>
                                <th>RESPONSEVALUE</th>
                                <th>RESPONSEDT</th>
                                <th>RECORDINSERTDT</th>
                                <th>RECORDUPDTDT</th>
                            </tr>
                            {
                                this.state.result.map(function (member, i) {
                                    return <tr><td>{member.HRAASSMNTID}</td>
                                        <td>{member.MEMBERID}</td>
                                        <td>{member.HRASOURCEQUESTIONID}</td>
                                        <td>{member.QUESTIONTEXT}</td>
                                        <td>{member.HRASOURCEANSWERID}</td>
                                        <td>{member.ANSWERTEXT}</td>
                                        <td>{member.RESPONSETEXT}</td>
                                        <td>{member.RESPONSEVALUE}</td>
                                        <td>{member.RESPONSEDT === null ? null : Moment(member.RESPONSEDT).format("DD/MM/YYYY")}</td>
                                        <td>{member.RECORDINSERTDT === null ? null : Moment(member.RECORDINSERTDT).format("DD/MM/YYYY")}</td>
                                        <td>{member.RECORDUPDTDT === null ? null : Moment(member.RECORDUPDTDT).format("DD/MM/YYYY")}</td>
                                    </tr>
                                })
                            }
                        </thead>
                    </Table>
                </Grid>
            </div>
        )
    }
}

