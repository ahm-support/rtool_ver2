/**
 * Created by RBhatnagar on 3/27/2018.
 */

"use strict";
import 'babel-polyfill';
import '../../css/CustomLeftNav.css';
import Frame from 'react-frame-component';
require('es6-promise').polyfill();
import React from 'react';
const _ = require('lodash');
import NavBar from "./NavBar";
import {Line,Bar} from 'react-chartjs-2';
import axios from 'axios';


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
import { returnData, setData, returnJson } from '../../common/helper';
import {Sidebar, SidebarItem, Link} from 'react-router-dom';
import Moment from 'moment';

export default class Trackers extends React.Component {
    constructor(props) {
        super(props);

        let memberPlanId;
        if (history.state.state.type) {
            console.log('in type', history.state.state.type);
            memberPlanId = history.state.state.memberPlanId;
            console.log('trackers data for member', memberPlanId);
        } else {
            memberPlanId = history.state.state;
        }

        this.state = {
            memberPlanId: memberPlanId,
            result:[],
            chartData: {},
        }
    }


      //MEMBERREPORTEDMEASUREMENTDT - X axis
    //MEMBERREPORTEDNUMERICVALUE - Y axis


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
        axios('https://api.myjson.com/bins/l5pw3')
        .then((response) => {

            const { keywordData } = response.data;
            console.log("judy in trackers",keywordData);
            const chartData = {
              labels: keywordData.map(k => k.category),
              datasets: [
                {
                  label: 'Trackers',
                  data: keywordData.map(d => d.noOfSpectra),
                  backgroundColor: 'blue',
                }
              ]
            }
        
            this.setState({ chartData });
        });
    }
 

    render() {
        return (
            <div>
            <div  style={{ position: "relative", marginLeft:450, justifyContent:"center" , alignItems:'center', width:600, height: 550 }}>
            <Row><NavBar /></Row>
            <br/>
            <br/>
            <Col xs={6} md={1}></Col>
            <Col xs={6} md={3}></Col>
                <h3>Health Trackers</h3>
                <br/>
                    <br/>
                           <Row>
                        <Col md={1}></Col>
                        <Col md={4}><Link to={{
                            pathname: '/memberDetails',
                            state: {memberPlanId: this.state.memberPlanId, type: 'return'}
                        }}><Image title="Back" src="../../../images/brokenArrowBack.jpg" style={{width: 40, height: 40}}/></Link></Col>
                   </Row>
                   <br/>
                    <br/>
                    
                <Bar
                options={{
                    responsive: true
                }}
                data={this.state.chartData}
                />
              </div>
              <div style={{ position: "relative", marginLeft:450, justifyContent:"center" , alignItems:'center', width:900, height: 600 }}>
                    <Table responsive  >
                        <thead>
                            <tr>
                            <th>MEMBERID</th>
                            <th>MEMBERREPORTEDDEVICETYPE</th>
                            <th>DEVICETRACKEDFLG</th>
                            <th>MEMBERREPORTEDMEASUREMENTTYPE</th>
                            <th>MEASUREMENTSUBTYPE</th>
                            <th>MEMBERREPORTEDNUMERICVALUE</th>
                            <th>DATASOURCENM</th>
                            <th>VENDORSOURCENM</th>
                            <th>MEMBERREPORTEDMEASUREMENTDT</th>
                            <th>RECORDINSERTDT</th>
                            <th>RECORDUPDTDT</th>
                            <th>TRANSACTIONDT</th>
                            </tr>
                            {
                                this.state.result.map(function (member, i) {
                                    return <tr><td>{member.MEMBERID}</td>
                                    <td>{member.MEMBERREPORTEDDEVICETYPE}</td>
                                    <td>{member.DEVICETRACKEDFLG}</td>
                                    <td>{member.MEMBERREPORTEDMEASUREMENTTYPE}</td>
                                    <td>{member.MEASUREMENTSUBTYPE}</td>
                                    <td>{member.MEMBERREPORTEDNUMERICVALUE}</td>
                                    <td>{member.DATASOURCENM}</td>
                                    <td>{member.VENDORSOURCENM}</td>
                                    <td>{member.MEMBERREPORTEDMEASUREMENTDT === null ? null : Moment(member.MEMBERREPORTEDMEASUREMENTDT).format("DD/MM/YYYY")}</td>
                                    <td>{member.RECORDINSERTDT === null ? null : Moment(member.RECORDINSERTDT).format("DD/MM/YYYY")}</td>
                                    <td>{member.RECORDUPDTDT === null ? null : Moment(member.RECORDUPDTDT).format("DD/MM/YYYY")}</td>
                                    <td>{member.TRANSACTIONDT === null ? null : Moment(member.TRANSACTIONDT).format("DD/MM/YYYY")}</td>
                                   
                                </tr>
                                })
                            }
                        </thead>
                    </Table>
                    </div>
            </div>
        )
    }
}

        