/**
 * Created by RBhatnagar on 3/27/2018.
 */

"use strict";
import 'babel-polyfill';
require('es6-promise').polyfill();
import React from 'react';
const _ = require('lodash');
import { Link } from 'react-router-dom';
import NavBar from "./NavBar";


import HAtbl from './tblComponent/HAtbl.js';
import HRAtbl from './tblComponent/HRAtbl.js';

import Incentivestbl from './tblComponent/Incentivestbl.js';
import Rewardstbl from './tblComponent/Rewardstbl.js';
import Trackerstbl from './tblComponent/Trackerstbl.js';


import {
    Navbar,
    NavItem,
    NavbarBrand,
    Nav,
    NavDropdown,
    MenuItem,
    Button,
    Pagination,
    Table,
    Grid,
    Col,
    Row,
    Image,
    Thumbnail
} from 'react-bootstrap';
import View from './data/DataView';
import Config from '../../common/config.json';
import { returnData, setData, returnJson } from '../../common/helper';
import Moment from 'moment';
export default class ServiceMain extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            result: [],
            memberPlanId: '',
            componentName: '',

        }
    }

    componentWillMount() {
        const memberPlanId = history.state.state.memberPlanId;
        const componentName = history.state.state.name;
        console.log('ServiceMain componentWillMount::', memberPlanId, componentName);
        this.callApi(componentName, memberPlanId);
    }

    componentWillReceiveProps(nextProps) {
        console.log('ServiceMain::', nextProps);
        if (this.props.location.state != nextProps.location.state) {
            this.callApi(componentName, memberPlanId);
        }
    }

    componentDidCatch(error, info) {
        console.log("Error: ", error);
    }

    callApi(componentName, memberPlanId) {
        console.log('In ServiceMain' + componentName);
        // const serviceName = _.get(Config.mahServices, `${componentName}`);
        // const restURL = `http://${Config.hostUrl}:${Config.port}${serviceName}?app-id=${Config.appId}&memberId=${memberPlanId}`;

        //const restURL = 'http://incentives.azprd.ahmcert.com/incentivesweb/incentives/EN/memberPlan/1630087942?processingDate=';
        // returnData('fetchData', restURL).then((data) => this.setState({result: data, memberPlanId: memberPlanId, componentName: componentName}));
        returnJson(componentName).then((data) => this.setState({
            result: data,
            memberPlanId: memberPlanId,
            componentName: componentName,
        }));

    }


    render() {
        let serviceComponent;

        if (_.eq(this.state.componentName, "Health Actions")) {
            serviceComponent = <HAtbl result={this.state.result} />;

        }
        else if (_.eq(this.state.componentName, "Health Assessments")) {
            serviceComponent = <HRAtbl result={this.state} />

        }
        else if (_.eq(this.state.componentName, "Incentive")) {
            serviceComponent = <Incentivestbl result={this.state} />

        }
        else if (_.eq(this.state.componentName, "Reward")) {
            serviceComponent = <Rewardstbl result={this.state} />

        }
        else if (_.eq(this.state.componentName, "TRACKER")) {
            serviceComponent = <Trackerstbl result={this.state} />

        }
        else { serviceComponent = "Component is not defined"; }

        // if (this.state.componentName == "Health Actions") {
        //     serviceComponent = (
        //         <Table responsive>
        //             <thead>
        //                 <tr>
        //                     <th>METrackingID</th>
        //                     <th>MEID</th>
        //                     <th>METitle</th>
        //                     <th>METypecode</th>
        //                     <th>MEImpactableFlag</th>
        //                     <th>MEChronic</th>
        //                     <th>MERank</th>
        //                     <th>MESeverity</th>
        //                     <th>MEChangeDate</th>
        //                     <th>CECompletionStatus</th>
        //                     <th>MEExpiredFlag</th>
        //                 </tr>
        //                 {
        //                     this.state.result.MEList.map(function (member, i) {
        //                         return <tr><td>{member.METrackingID}</td>
        //                             <td>{member.MEID}</td>
        //                             <td>{member.METitle}</td>
        //                             <td>{member.METypecode}</td>
        //                             <td>{member.MEImpactableFlag}</td>
        //                             <td>{member.MEChronic}</td>
        //                             <td>{member.MERank}</td>
        //                             <td>{member.MESeverity}</td>
        //                             <td>{Moment(member.MEChangeDate).format("DD/MM/YYYY")}</td>
        //                             <td>{member.CECompletionStatus}</td>
        //                             <td>{member.MEExpiredFlag}</td>
        //                         </tr>
        //                     })
        //                 }
        //             </thead>

        //         </Table>)
        // }

        // else if (this.state.componentName == "Health Assessments") {
        //     serviceComponent = (
        //         <Table responsive>
        //             <thead>
        //                 <tr>
        //                     <th>HRAASSMNTID</th>
        //                     <th>DATASOURCE NAME</th>
        //                     <th>SURVEY NAME</th>
        //                     <th>SURVEY STATUS</th>
        //                     <th>RECORD UPDT DATE</th>
        //                     <th>INSERTEDBY</th>
        //                     <th>VENDOR SOURCE NAME</th>
        //                     <th>COMPLETION DATE</th>
        //                     <th>LOCATION SOURCE NAME</th>
        //                 </tr>
        //                 {
        //                     this.state.result.map(function (member, i) {
        //                         return <tr><td>{member.HRAASSMNTID}</td>
        //                             <td>{member.DATASOURCENM}</td>
        //                             <td>{member.SURVEYNM}</td>
        //                             <td>{member.SURVEYSTATUS}</td>
        //                             <td>{Moment(member.RECORDUPDTDT).format("DD/MM/YYYY")}</td>
        //                             <td>{member.INSERTEDBY}</td>
        //                             <td>{member.VENDORSOURCENM}</td>
        //                             <td>{member.COMPLETIONDT === null ? null : Moment(member.COMPLETIONDT).format("DD/MM/YYYY")}</td>
        //                             <td>{member.LOCATIONSOURCENM}</td>
        //                         </tr>
        //                     })
        //                 }
        //             </thead>
        //             <Col>
        //                 <Link to={{ pathname: "MemberResponse_HRA", state: this.state }}>Member Response</Link>
        //             </Col>
        //         </Table>
        //     )

        // }

        // else if (this.state.componentName == "Incentive") {
        //     serviceComponent = (
        //         <Table responsive>
        //             <thead>
        //                 <tr>
        //                     <th>PROGRAMNAME</th>
        //                     <th>REWARDREDEMPTIONHIST</th>
        //                     <th>TITLE</th>
        //                     <th>displayRewardRedemptionHistory</th>
        //                     <th>displayRewardRedemptionHistory</th>
        //                     <th>displayRewardRedemptionHistory</th>


        //                 </tr>
        //                 {
        //                     this.state.result.map(function (member, i) {
        //                         return <tr><td>{member.incentiveProgram.incentiveProgramDisplayName}</td>
        //                             <td>{member.incentiveProgram.displayRewardRedemptionHistory}</td>
        //                             <td>{member.incentiveProgram.incentiveDisclaimer}</td>
        //                             <td>{member.incentiveProgram.incentiveTitle}</td>
        //                             <td>{member.incentiveProgram.incentiveWelcomeEarnMaternity}</td>
        //                         </tr>
        //                     })
        //                 }
        //             </thead>
        //         </Table>
        //     )

        // }
        // else if (this.state.componentName == "Reward") {
        //     serviceComponent = (
        //         <Table responsive>
        //             <thead>
        //                 <tr>
        //                     <th>RewardLevel</th>
        //                     <th>ActivityLevel</th>
        //                     <th>AnnualHeartsEarned</th>
        //                     <th>LifetimeHeartsEarned</th>
        //                     <th>HeartsBalance</th>
        //                     <th>HeartsStartPeriod</th>
        //                     <th>HeartsEndPeriod</th>
        //                     <th>HeartsConversionRate</th>
        //                     <th>SweepStakesEndDate</th>
        //                     <th>SweepstakesScore</th>
        //                     <th>SweepstakesDonotShow</th>
        //                 </tr>
        //                 {
        //                     this.state.result.map(function (member, i) {
        //                         return <tr><td>{member.RewardLevel}</td>
        //                             <td>{member.ActivityLevel}</td>
        //                             <td>{member.AnnualHeartsEarned}</td>
        //                             <td>{member.LifetimeHeartsEarned}</td>
        //                             <td>{member.HeartsBalance}</td>
        //                             <td>{member.HeartsStartPeriod === null ? null : Moment(member.HeartsStartPeriod).format("DD/MM/YYYY")}</td>
        //                             <td>{member.HeartsEndPeriod === null ? null : Moment(member.HeartsEndPeriod).format("DD/MM/YYYY")}</td>
        //                             <td>{member.HeartsConversionRate}</td>
        //                             <td>{member.SweepStakesEndDate === null ? null : Moment(member.SweepStakesEndDate).format("DD/MM/YYYY")}</td>
        //                             <td>{member.SweepstakesScore}</td>
        //                             <td>{member.SweepstakesDonotShow}</td>

        //                         </tr>
        //                     })
        //                 }
        //             </thead>
        //         </Table>
        //     )

        // }

        // else if (this.state.componentName == "TRACKER") {

        //     serviceComponent = (
        //         <Table responsive>
        //             <thead>
        //                 <tr>
        //                     <th>MEMBERID</th>
        //                     <th>MEMBERREPORTEDDEVICETYPE</th>
        //                     <th>DEVICETRACKEDFLG</th>
        //                     <th>MEMBERREPORTEDMEASUREMENTTYPE</th>
        //                     <th>MEASUREMENTSUBTYPE</th>
        //                     <th>DATASOURCENM</th>
        //                     <th>VENDORSOURCENM</th>
        //                     <th>MEMBERREPORTEDMEASUREMENTDT</th>
        //                     <th>RECORDINSERTDT</th>
        //                     <th>RECORDUPDTDT</th>
        //                     <th>TRANSACTIONDT</th>
        //                 </tr>
        //                 {
        //                     this.state.result.map(function (member, i) {
        //                         return <tr><td>{member.MEMBERID}</td>
        //                             <td>{member.MEMBERREPORTEDDEVICETYPE}</td>
        //                             <td>{member.DEVICETRACKEDFLG}</td>
        //                             <td>{member.MEMBERREPORTEDMEASUREMENTTYPE}</td>
        //                             <td>{member.MEASUREMENTSUBTYPE}</td>
        //                             <td>{member.DATASOURCENM}</td>
        //                             <td>{member.VENDORSOURCENM}</td>
        //                             <td>{member.MEMBERREPORTEDMEASUREMENTDT === null ? null : Moment(member.MEMBERREPORTEDMEASUREMENTDT).format("DD/MM/YYYY")}</td>
        //                             <td>{member.RECORDINSERTDT === null ? null : Moment(member.RECORDINSERTDT).format("DD/MM/YYYY")}</td>
        //                             <td>{member.RECORDUPDTDT === null ? null : Moment(member.RECORDUPDTDT).format("DD/MM/YYYY")}</td>
        //                             <td>{member.TRANSACTIONDT === null ? null : Moment(member.TRANSACTIONDT).format("DD/MM/YYYY")}</td>

        //                         </tr>
        //                     })
        //                 }
        //             </thead>
        //         </Table>
        //     )

        // }

        // else {
        //     serviceComponent = (
        //         <Table responsive>
        //             <thead>
        //                 <tr>
        //                     <th>METrackingID</th>
        //                     <th>MEID</th>
        //                     <th>METitle</th>
        //                     <th>METypecode</th>
        //                     <th>MEImpactableFlag</th>
        //                     <th>MEChronic</th>
        //                     <th>MERank</th>
        //                     <th>MESeverity</th>
        //                     <th>MEChangeDate</th>
        //                     <th>CECompletionStatus</th>
        //                     <th>MEExpiredFlag</th>
        //                 </tr>
        //                 {
        //                     this.state.result.map(function (member, i) {
        //                         return <tr><td>{member.METrackingID}</td>
        //                             <td>{member.MEID}</td>
        //                             <td>{member.METitle}</td>
        //                             <td>{member.METypecode}</td>
        //                             <td>{member.MEImpactableFlag}</td>
        //                             <td>{member.MEChronic}</td>
        //                             <td>{member.MERank}</td>
        //                             <td>{member.MESeverity}</td>
        //                             <td>{Moment(member.MEChangeDate).format("DD/MM/YYYY")}</td>
        //                             <td>{member.CECompletionStatus}</td>
        //                             <td>{member.MEExpiredFlag}</td>
        //                         </tr>
        //                     })
        //                 }
        //             </thead>
        //         </Table>)
        // }
        return (
            <div>
                <Grid>
                    <Row><NavBar /></Row>
                    <br />
                    <br />
                    <Row>
                        <Col><h2>{this.state.componentName} -</h2>
                            <p>Primary account information</p>
                        </Col>
                    </Row>
                    <br />
                    <br />
                    <Row>
                        <Col>
                            <Link to={{ pathname: '/memberDetails', state: { memberPlanId: this.state.memberPlanId, type: 'return' } }} >
                                <Image title="Back" src="../../../images/arrowImg.png" style={{ width: 20, height: 20 }} />
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