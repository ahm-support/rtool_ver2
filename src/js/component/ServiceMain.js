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
import { Grid, Col, Row, Image } from 'react-bootstrap';
import View from './data/DataView';
import Config from '../../common/config.json';
import { returnData, setData, returnComponentData, getServiceUrl } from '../../common/helper';
import Moment from 'moment';
import ComponentEnum from '../../common/Enums.js'



export default class ServiceMain extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            result: [],
            memberID: '',
            componentName: ''

        }

    }


    componentWillMount() {
        const memberId = history.state.state.memberID;
        const componentName = history.state.state.name;
        console.log('ServiceMain componentWillMount::', memberId, componentName);
        this.callApi(componentName, memberId);
    }

    componentWillReceiveProps(nextProps) {
        console.log('ServiceMain::', nextProps);
        if (this.props.location.state != nextProps.location.state) {
            this.callApi(componentName, memberId);
        }
    }

    componentDidCatch(error, info) {
        console.log("Error: ", error);
    }

    // callApi(componentName, memberId) {
    //     console.log('In ServiceMain' + componentName);
    //     const restURL = getServiceName(componentName, memberId);
    //     console.log('In ServiceMain ' + restURL);
    //     returnData(componentName, restURL).then((data) => this.setState({
    //         result: data,
    //         memberId: memberId,
    //         componentName: componentName,
    //     }));
    //     // returnComponentData(componentName).then((data) => this.setState({
    //     //     result: data,
    //     //     memberPlanId: memberID,
    //     //     componentName: componentName,
    //     // }));

    // }

    callApi(componentName, memberId) {
        console.log('In ServiceMain' + componentName);
        const restURL = getServiceUrl(componentName, memberId);
        console.log('In ServiceMain ' + restURL);
        returnData(componentName, restURL).then((data) => this.setState({
            result: data,
            memberId: memberId,
            componentName: componentName
        }));

    }

    render() {
        let serviceComponent;

        if (_.eq(this.state.componentName, ComponentEnum.HealthAction)) {
            serviceComponent = <HAtbl result={this.state.result} />;

        }
        else if (_.eq(this.state.componentName, ComponentEnum.HealthAssessment)) {
            serviceComponent = <HRAtbl result={this.state} onSubmit={this.togglePopup} >
            </HRAtbl>

        }
        else if (_.eq(this.state.componentName, ComponentEnum.Incentives)) {
            serviceComponent = <Incentivestbl result={this.state} />

        }
        else if (_.eq(this.state.componentName, ComponentEnum.Reward)) {
            serviceComponent = <Rewardstbl result={this.state} />

        }
        else if (_.eq(this.state.componentName, ComponentEnum.Trackers)) {
            serviceComponent = <Trackerstbl result={this.state} />

        }
        else { serviceComponent = ComponentEnum.Empty }

        return (
            <div>
                <Grid>
                    <Row><NavBar /></Row>
                    <br />
                    <br />
                    <Row>
                        <Col><h2>{this.state.componentName}</h2>
                            {/* <p>Primary account information</p> */}
                        </Col>
                        <Col >
                        <Link to={{ pathname: '/memberDetails', state: { memberID: this.state.memberID, type: 'return' } }} >
                        <Image align="right" title="Back" src="../../../images/brokenArrowBack.jpg" style={{ width: 40, height: 40 }} />
                        </Link>
                        </Col>
                    </Row>
                    {/* <br /> */}
                    <br />
                    <Row>
                        <Col>
                            {/* <Link to={{ pathname: '/memberDetails', state: { memberID: this.state.memberID, type: 'return' } }} > */}
                                {/* <Image title="Back" src="../../../images/arrowImg.png" style={{ width: 20, height: 20 }} /> */}
                            {/* </Link> */}
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