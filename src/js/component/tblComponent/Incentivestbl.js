"use strict";
import 'babel-polyfill';
require('es6-promise').polyfill();
import React from 'react';
const _ = require('lodash');
import Moment from 'moment';
import NavBar from "../NavBar";
import {Sidebar, SidebarItem, Link} from 'react-router-dom';
import '../../../css/Incentive.css';
//import { returnData, setData, returnComponentData } from '../../../common/helper';

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
import Pagination from '../Pagination';

export default class Incentivestbl extends React.Component {

    constructor(props) {
        super(props);

        let memberId;
        if (history.state.state.type) {
            console.log('in type', history.state.state.type);
            memberId = history.state.state.memberId;
            console.log('Incentive data for member', memberId);
        } else {
            memberId = history.state.state;
        }
        this.state = {
           // memberID: memberID,
            result: [],
            currentPage: 1, //for pagination
            todosPerPage: 10,//for pagination
            progressData:{}

        }
    }

    componentWillMount() {
        console.log('Component Mount in Incentivestbl');
        console.log(this.props);
    //    this.callApi(this.state.memberId);
        // this.setState({ state: this.props });
    }

    changeButtonState(event) {
        console.log('active page is' + Number(event.target.id));
        this.setState({ currentPage: Number(event.target.id) })
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.location.state != nextProps.location.state) {
            this.callApi(nextProps.location.state);
        }
    }

    componentDidCatch(error, info) {
        console.log("Error: ", error);
    }

    // callApi(memberId) {
    //     //  const restURL = `http://${Config.hostUrl}:${Config.port}${Config.mahServices.member}?app-id=${Config.appId}&memberId=${memberPlanId}`;
    //     //returnData('fetchData', restURL).then((data) => this.setState({result: data}));
    //     returnComponentData("Incentives")
    //     .then((response) => {            
    //         let sum = 0;
                       
    //            this.setState ({
    //             earned: sum,
    //             result:response
    //             });
    //            console.log("Judy here:",response);
               
    //            });
    //     }

        render() {
            const { memberId, result, currentPage, todosPerPage } = this.state;
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
                            {/* <Row><NavBar />
                            </Row> */}
                            {/* <h2>Welcome to Reward Center</h2> */}
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