/**
 * Created by rbhatnagar on 4/21/2018.
 */
/**
 * Created by RBhatnagar on 3/27/2018.
 */

"use strict";
import 'babel-polyfill';
require('es6-promise').polyfill();
import React from 'react';
const _ = require('lodash');
import {Link} from 'react-router-dom';
import Moment from 'moment';
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
import NavBar from "./NavBar";
import View from './data/DataView';
import Config from '../../common/config.json';
import { returnData, setData, returnComponentData } from '../../common/helper';
export default class DCMemberService extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            result: [],
            memberPlanId: '',
            type: ''
        }
    }

    // componentWillMount() {
    //     if (history.state.state.name) {
    //         let memberPlanId;
    //         if (history.state.state.callType) {
    //             memberPlanId = history.state.state.memberPlanId;
    //         } else {
    //             memberPlanId = history.state.state.memberPlanId;
    //             console.log('memberPlanId$$' + memberPlanId);
    //         }
    //         const componentName = history.state.state.name;
    //         console.log('DCMemberService componentWillMount::', memberPlanId, componentName);
    //         this.callApi(componentName, memberPlanId);
    //     }
    // }

    // componentWillReceiveProps(nextProps) {
    //     console.log('ServiceMain::', nextProps);
    //     if (this.props.location.state != nextProps.location.state) {
    //         this.callApi(componentName, memberPlanId);
    //     }
    // }

    // componentDidCatch(error, info) {
    //     console.log("Error: ", error);
    // }

    // callApi(componentName, memberPlanId) {
    //     // const serviceName = _.get(Config.mahServices, `${componentName}`);
    //     // const restURL = `http://${Config.hostUrl}:${Config.port}${serviceName}?app-id=${Config.appId}&memberId=${memberPlanId}`;
    //     // returnData('fetchData', restURL).then((data) => this.setState({result: data, memberPlanId: memberPlanId}));
    //     returnJson("DCMemberDetails").then((data) => this.setState({ result: data }));
    // }


    
    componentWillMount() {
        const memberPlanId = history.state.state.memberPlanId;
        const componentName = history.state.state.name;
        console.log('DCMemberservice componentWillMount::', memberPlanId, componentName);
        this.callApi(componentName, memberPlanId);
    }

    componentWillReceiveProps(nextProps) {
        console.log('DCMemberservice::', nextProps);
        if (this.props.location.state != nextProps.location.state) {
            this.callApi(componentName, memberPlanId);
        }
    }

    componentDidCatch(error, info) {
        console.log("Error: ", error);
    }

    callApi(componentName, memberPlanId) {
        console.log('DCMemberservice2' + componentName);
        console.log('judy testing111',this.state.result)
        // const serviceName = _.get(Config.mahServices, `${componentName}`);
        // const restURL = `http://${Config.hostUrl}:${Config.port}${serviceName}?app-id=${Config.appId}&memberId=${memberPlanId}`;

        //const restURL = 'http://incentives.azprd.ahmcert.com/incentivesweb/incentives/EN/memberPlan/1630087942?processingDate=';
        // returnData('fetchData', restURL).then((data) => this.setState({result: data, memberPlanId: memberPlanId, componentName: componentName}));
        returnComponentData(componentName).then((data) => this.setState({ result: data, memberPlanId: memberPlanId, componentName: componentName }));

    }

    render() {
        let serviceComponent;
        if (this.state.componentName == "behaviors") {
            serviceComponent = (
                <Table responsive>
                    <thead>
                        <tr>
                            <th>BehaviorId</th>
                            <th>Title</th>
                            <th>BehaviorType</th>
                            <th>Description</th>
                            <th>MemberStatus</th>
                            <th>DefaultBehavior</th>
                            <th>BehaviorProgress</th>
                            <th>BehaviorStartDate</th>
                            <th>BehaviorLastUpdatedDate</th>
                        </tr>
                        {
                            this.state.result.map(function (member, i) {
                                return <tr><td>{member.BehaviorId}</td>
                                    <td>{member.Title}</td>
                                    <td>{member.BehaviorType}</td>
                                    <td>{member.Description}</td>
                                    <td>{member.MemberStatus}</td>
                                    <td>{member.DefaultBehavior}</td>
                                    <td>{member.BehaviorProgress}</td>
                                    <td>{Moment(member.BehaviorStartDate).format("DD/MM/YYYY")}</td>
                                    <td>{Moment(member.BehaviorLastUpdatedDate).format("DD/MM/YYYY")}</td>
                                    </tr>
                            })
                        }
                    </thead>
                </Table>)
        }
        else if (this.state.componentName == "goals") {
            serviceComponent = (
                <Table responsive>
                    <thead>
                        <tr>
                            <th>GoalId</th>
                            <th>GoalTitle</th>
                            <th>GoalName</th>
                            <th>GoalStatus</th>
                            <th>GoalInstanceId</th>
                            <th>GoalStartDate</th>
                            <th>GoalCompletionDate</th>
                            <th>GoalExpirationDate</th>
                            <th>EngagementIndicator</th>
                            <th>IsDefaultGoal</th>
                        </tr>
                        {
                            this.state.result.map(function (member, i) {
                                return <tr><td>{member.GoalId}</td>
                                    <td>{member.GoalTitle}</td>
                                    <td>{member.GoalName}</td>
                                    <td>{member.GoalStatus}</td>
                                    <td>{member.GoalInstanceId}</td>
                                    <td>{Moment(member.GoalStartDate).format("DD/MM/YYYY")}</td>
                                    <td>{Moment(member.GoalCompletionDate).format("DD/MM/YYYY")}</td>
                                    <td>{Moment(member.GoalExpirationDate).format("DD/MM/YYYY")}</td>
                                    <td>{member.EngagementIndicator}</td>
                                    <td>{member.IsDefaultGoal}</td>
                                </tr>
                            })
                        }
                    </thead>
                </Table>)
        }

        else {
            serviceComponent = (
                <Table responsive>
                    <thead>
                        <tr>
                            <th>MemberActivityId</th>
                            <th>GoalInstanceId</th>
                            <th>ActivityId</th>
                            <th>Status</th>
                            <th>HeartsEarned</th>
                            <th>ActivityStartDate</th>
                            <th>ActivityEndDate</th>
                            <th>CreatedDate</th>
                        </tr>
                        {
                            this.state.result.map(function (member, i) {
                                return <tr><td>{member.MemberActivityId}</td>
                                    <td>{member.GoalInstanceId}</td>
                                    <td>{member.ActivityId}</td>
                                    <td>{member.Status}</td>
                                    <td>{member.HeartsEarned}</td>
                                    <td>{Moment(member.ActivityStartDate).format("DD/MM/YYYY")}</td>
                                    <td>{Moment(member.ActivityEndDate).format("DD/MM/YYYY")}</td>
                                    <td>{Moment(member.CreatedDate).format("DD/MM/YYYY")}</td>
                                    </tr>
                            })
                        }
                    </thead>
                </Table>)
        }
        return (
            <div>
                <Grid >
                    <Row>
                    <Row><NavBar /></Row>
                        {/* <Col xs={6} md={1}></Col> */}
                        <Col xs={6} md={3}><h2>Digital Coaching</h2>
                        </Col>
                    </Row>
                    <br/>
                    <br/>
                    <br/>
                    
                    <Row>
                        
                        <Col>
                            <Link
                                to={{pathname: '/dc', state: {memberPlanId: this.state.memberPlanId, type: 'return'}}}>
                                <Image title="Back" src="../../../images/arrowImg.png" style={{width: 20, height: 20}}/>
                                Back
                            </Link>
                        </Col>
                    </Row>
                    <Row>
                    {serviceComponent}
                        {/* <View res={this.state.result} /> */}
                    </Row>
                </Grid>
            </div>
        )
    }
}
//const restURL = "http://localhost:4001/ahm/health-assessments?app-id=testing&q=1720874840";
