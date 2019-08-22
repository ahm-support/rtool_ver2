"use strict";
import 'babel-polyfill';
require('es6-promise').polyfill();
import React from 'react';
const _ = require('lodash');
import Moment from 'moment';
import { Link } from 'react-router-dom';
import { Table, Col } from 'react-bootstrap';
import {Line,Bar} from 'react-chartjs-2';
import Pagination from '../Pagination';
import ReactTable from 'react-table';
import 'react-table/react-table.css';

export default class Trackerstbl extends React.Component {

    constructor(props) {
        super(props);
        
        this.state = {
            result: [],
            currentPage: 1, // for pagination
            todosPerPage: 8 // for pagination

        }
    }

    componentWillMount() {
        console.log('Component Mount in Trackertbl');
        console.log(this.props);
        // this.setState({ state: this.props });
    }

    changeButtonState(event) {
        console.log('active page is' + Number(event.target.id));
        this.setState({ currentPage: Number(event.target.id) })
    }

    render() {
       const { currentPage, todosPerPage } = this.state;
       const indexOfLastTodo = currentPage * todosPerPage;
       const indexOfFirstTodo = indexOfLastTodo - todosPerPage;
       var data=[];
       var TrackerList = [];
       var totalSteps = [];
       var durationExercise = [];
       data=this.props.result;
        console.log('Trackerstbl: ', data);

        // Filter based on steps and exercise
        TrackerList = data.result;
        totalSteps = _.filter(TrackerList, { 'MEASUREMENTSUBTYPE': 'Total Steps' , 'MEMBERREPORTEDMEASUREMENTTYPE' : 'Total Steps'});
        durationExercise = _.filter(TrackerList, { 'MEASUREMENTSUBTYPE': 'Duration', 'MEMBERREPORTEDMEASUREMENTTYPE': 'Generic Exercise'});

        const currentTodos = this.state.result.slice(indexOfFirstTodo, indexOfLastTodo);
        
        const chartDataSteps = {
            labels: totalSteps.map(k=> k.RECORDUPDTDT),
  
            datasets: [
                {
                label: 'Trackers',
                
                data: totalSteps.map(d=> d.MEMBERREPORTEDNUMERICVALUE) ,
                backgroundColor: 'purple',
                }
            ]
        }

        const dateSteps = totalSteps.map(t=> t.MEMBERREPORTEDMEASUREMENTDT)[0];

        const chartDataExercise = {
            labels: durationExercise.map(k=> k.RECORDUPDTDT),
  
            datasets: [
                {
                label: 'Trackers',
                
                data: durationExercise.map(d=> d.MEMBERREPORTEDNUMERICVALUE) ,
                backgroundColor: 'purple',
                }
            ]
        }

        const dateexercise = durationExercise.map(t=> t.MEMBERREPORTEDMEASUREMENTDT)[0];
        

        const columns = [
            {
                Header: "MEMBERREPORTEDMEASUREMENTDT",
                accessor:"MEMBERREPORTEDMEASUREMENTDT",
                // filterable: "true",
                style: {
                    textAlign:"left"
                },
                width: 100,
                maxWidth: 100,
                minWidth: 100,
            },
            {
                Header: "MEMBERREPORTEDMEASUREMENTTYPE",
                accessor:"MEMBERREPORTEDMEASUREMENTTYPE",
                // filterable: "true",
                style: {
                    textAlign:"left"
                },
                width: 100,
                maxWidth: 100,
                minWidth: 100,
            },
            {
                Header: "MEASUREMENTSUBTYPE",
                accessor:"MEASUREMENTSUBTYPE",
                // filterable: "true",
                style: {
                    textAlign:"left"
                },
                width: 100,
                maxWidth: 100,
                minWidth: 100,
            },
            {
                Header: "VENDORSOURCENM",
                accessor:"VENDORSOURCENM",
                // filterable: "true",
                style: {
                    textAlign:"left"
                },
                width: 100,
                maxWidth: 100,
                minWidth: 100,
            },
            {
                Header: "TRANSACTIONDT",
                accessor:"TRANSACTIONDT",
                // filterable: "true",
                style: {
                    textAlign:"left"
                },
                width: 100,
                maxWidth: 100,
                minWidth: 100,
            },
            //MEMBERREPORTEDNUMERICVALUE
            {
                Header: "MEMBERREPORTEDNUMERICVALUE",
                accessor:"MEMBERREPORTEDNUMERICVALUE",
                // filterable: "true",
                style: {
                    textAlign:"left"
                },
                width: 100,
                maxWidth: 100,
                minWidth: 100,
            },
        ]

        return (
       <div style={{ position: "relative",  justifyContent:"center" , alignItems:'center' ,width:800, height: 500}}>
          <form align="right">
                    <label>
                        MeasurementDate:
                        <input type= "text" value={dateSteps}  disabled />
                        </label>
                        </form>
                <Bar  data={chartDataSteps}
                options = {{
                    title: {
                        display: true,
                        text:'Total Steps',
                        fontsize: 25
                    },
                    legend:{
                        display:true,
                        position:'right'
                    },
                    scales: {
                        xAxes:[{
                            type: 'time',
                            ticks: {
                                autoSkip: true,
                                maxTicksLimit: 10
                            },
                            time: {
                                unit: 'day'
                            }
                            
                        }]
                    }
                }
            }/>
                     <br>
         </br>
         <ReactTable
         columns={columns}
         data={totalSteps}
         defaultPageSize={5}
         noDataText={"Please Wait.."}
         className="bgcolor-att-light-gray"
         PadRowComponent={()=> <span> &nbsp;</span>}
         ></ReactTable>
         <br>
         </br>
         <br>
         </br>
         <form align="right">
                    <label>
                        MeasurementDate:
                        <input type= "text" value={dateexercise}  disabled />
                        </label>
                        </form>

        <Bar  data={chartDataExercise}
                options = {{
                    title: {
                        display: true,
                        text:'Physical Exercise',
                        fontsize: 25
                    },
                    legend:{
                        display:true,
                        position:'right'
                    },
                    scales: {
                        xAxes:[{
                            type: 'time',
                            ticks: {
                                autoSkip: true,
                                maxTicksLimit: 5
                            },
                            time: {
                                unit: 'day'
                            }
                            
                        }]
                    }
                }
            }/>
                     <br>
         </br>
                     <ReactTable
         columns={columns}
         data={durationExercise}
         defaultPageSize={5}
         noDataText={"Please Wait.."}
         className="bgcolor-att-light-gray"
         PadRowComponent={()=> <span> &nbsp;</span>}
         ></ReactTable>
                  <br>
         </br>
         <br>
         </br>
                 </div>
                 )
}
}


