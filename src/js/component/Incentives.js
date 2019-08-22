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
import '../../css/Incentive.css';

//import { AppRegistry, ListView, Text, View, StyleSheet, TouchableHighlight } from 'react-native';
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

export default class Incentives extends React.Component {
    constructor(props) {
        super(props);

        let memberPlanId;
        if (history.state.state.type) {
            console.log('in type', history.state.state.type);
            memberPlanId = history.state.state.memberPlanId;
            console.log('Incentive data for member', memberPlanId);
        } else {
            memberPlanId = history.state.state;
        }

        this.state = {
            memberPlanId: memberPlanId,
            result:[],
            chartData: {},
            progressData:{}
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
        returnComponentData("Incentives")
        .then((response) => {            
            let sum = 0;
                       
               this.setState ({
                earned: sum,
                result:response

                });
                
               console.log("Judy here:",response);
               
               });
        }

    render() {
        const { memberPlanId, result, currentPage, todosPerPage } = this.state;
        const indexOfLastTodo = currentPage * todosPerPage;
        const indexOfFirstTodo = indexOfLastTodo - todosPerPage;
        const currentTodos = this.state.result.slice(indexOfFirstTodo, indexOfLastTodo);
        const progressData = this.state.result.map
        const rewardMax = [];
        this.state.result.forEach((rowdata,i)=>{
            rowdata.incentiveProgram.rewards.map((subRowData,k) => {
            rewardMax.push(
            <div key={subRowData.rewardsMax}>
            {subRowData.rewardsMax}
            </div>
                );
            });
        });

         // Progress Percentage
         const percentage = [];
         this.state.result.forEach((rowdata,i)=>{
            // rowdata.incentiveProgram.rewards.map((subRowData,k) => {
                 percentage.push(
             <div key={rowdata.incentiveProgram.completionPercentage}>
             <div>{rowdata.incentiveProgram.completionPercentage}</div>
             </div>
                 );
             });
         // });
 
         // Earned Value
         let Increment = 0;
             this.state.result.map((rowdata,i)=>{
             rowdata.incentiveProgram.rewards.map((subRowData,k) => {
                 for (i=0;i< subRowData.activities.length;i++) {
                     Increment += subRowData.activities[i].earned;
                 }
                 console.log ("subRowData.activities" , subRowData.activities);
                 console.log ("subRowData.rowdata" , rowdata.incentiveProgram.completionPercentage);
                 console.log("Increment",Increment);
                 console.log("Length",subRowData.activities.length);
                 console.log("Percentage",rowdata.incentiveProgram.completionPercentage);
             });
         });

        // Redeemed Value
        let Redeemed = 0;
        this.state.result.map((rowdata,i)=>{
        rowdata.incentiveProgram.rewards.map((subRowData,k) => {
            for (i=0;i< rowdata.incentiveProgram.rewards.length;i++) {
                Redeemed += rowdata.incentiveProgram.rewards[i].redeemedValue;
            }
             console.log ("subRowData.activities" , subRowData.activities);
            console.log("Redeemed",Redeemed);
            // console.log("LEngth",subRowData.activities.length)
        });
    });

 // Other details as below
    // "title": "Know Your Numbers",
    // "earned": 50,   -> $50
    //  "activityState": "INCOMPLETE",
    let activityStatetitle = [];
    this.state.result.forEach((rowdata,i)=>{
        rowdata.incentiveProgram.rewards.map((subRowData,j) => {
        subRowData.activities.map((innerData,l) => {
                activityStatetitle.push(
        <div key={innerData.title}>
        <div class="col-sm-4"><h4>{innerData.title}</h4>
        <div><h4>${innerData.earned}</h4></div>
        <div><h4>{innerData.activityState}</h4></div>
        </div>
        </div>
            );
        });
    });
});

        
        return (
            <div>
                <Grid className="container-fluid">
                    <Row>
                        <Row><NavBar />
                        </Row>
                        <h3>Welcome to Reward Center</h3>
            <br/>
            <br/>      
            
            <div class="container">
            <div class="jumbotron jumbotron-fluid text-center" >
                <div class="progress">
                <div class="progress-bar progress-bar-striped progress-bar-animated"  role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style={{width:"40%"}}> 40%
                </div>
               
             
                </div>
                <h4 class="title1">Total Goal:{rewardMax} </h4>
                               
                <div class="verticalLine">
                <h4 class="title2">Earned     : {Increment} <br></br>Redeemed : {Redeemed}</h4>
               
                
              

                    </div>
                    </div>
                    </div>
                    
                   
                   
                    
                    <div>{activityStatetitle}</div>
                    
                   
                    </Row>
                    </Grid>
                    </div>                    
          )
        }
    }