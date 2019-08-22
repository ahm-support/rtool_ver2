"use strict";
import 'babel-polyfill';
require('es6-promise').polyfill();
import React from 'react';
const _ = require('lodash');
import Moment from 'moment';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Table, Col, Button, Popup } from 'react-bootstrap';
import Pagination from '../Pagination';

import ReactTable from 'react-table';
import 'react-table/react-table.css'


export default class HRAtbl extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            result: [],
            currentPage: 1, //for pagination
            todosPerPage: 10,//for pagination
            hraassmntid: ''
        }
    }
    componentWillMount() {
        console.log('Component Mount in HRAtbl');
        console.log(this.props.result.result);
        console.log(_.filter(this.props.result.result, ['SURVEYNM', 'Well-being assessment']));
        const hRAASSMNTID = _.filter(this.props.result.result, ['SURVEYNM', 'Well-being assessment'])[0].HRAASSMNTID;
        console.log(hRAASSMNTID);
        this.setState({ hraassmntid: hRAASSMNTID });
    }

    changeButtonState(event) {
        console.log('active page is' + Number(event.target.id));
        console.log(this.props);
        this.setState({ currentPage: Number(event.target.id) })
    }

    render() {

        const columns = [
            {
                Header: "HRAASSMNTID",
                accessor: "HRAASSMNTID",
                sortable: "true",
                filterable: "true",
                style: {
                    textAlign: "right"
                },
                width: 100,
                maxWidth: 100,
                minWidth: 100,


            },
            {
                Header: "DATASOURCENM",
                accessor: "DATASOURCENM",
                style: {
                    textAlign: "right"
                },
                width: 100,
                maxWidth: 100,
                minWidth: 100

            },
            {
                Header: "SURVEYSTATUS",
                accessor: "SURVEYSTATUS",
                style: {
                    textAlign: "right"
                },
                width: 100,
                maxWidth: 100,
                minWidth: 100

            },
            {
                Header: "SURVEYNM",
                accessor: "SURVEYNM",
                style: {
                    textAlign: "right",
                    textJustify: true
                },
                width: 300,


            },
            {
                Header: "RECORDUPDTDT",
                accessor: "RECORDUPDTDT",
                style: {
                    textAlign: "center",
                    textJustify: true,
                    bold: false
                },
                width: 300,


            },
            {
                Header: "INSERTEDBY",
                accessor: "INSERTEDBY",
                style: {
                    textAlign: "right",
                    textJustify: true
                },
                width: 100,


            },
            {
                Header: "VENDORSOURCENM",
                accessor: "VENDORSOURCENM",
                style: {
                    textAlign: "right",
                    textJustify: true,


                },
                width: 100,


            },
            {
                Header: "COMPLETIONDT",
                accessor: "COMPLETIONDT",
                style: {
                    textAlign: "right",
                    textJustify: true
                },
                width: 200,


            },
            {
                Header: "LOCATIONSOURCENM",
                accessor: "LOCATIONSOURCENM",
                style: {
                    textAlign: "right",
                    textJustify: true
                },
                width: 100,
            },
        ]

        const { currentPage, todosPerPage } = this.state;
        const indexOfLastTodo = currentPage * todosPerPage;
        const indexOfFirstTodo = indexOfLastTodo - todosPerPage;
        var data = [];
        data = this.props.result;
        console.log(data.result);
        console.log("hraassmntid" + this.state.hraassmntid);
        console.log(this.props);
        var onSubmit = this.props.onSubmit;
        var hraassmntid=this.state.hraassmntid;
        const currentTodos = data.result.slice(indexOfFirstTodo, indexOfLastTodo);


        // Logic for displaying page numbers
        const pageNumbers = [];
        for (let i = 1; i <= Math.ceil(data.result.length / todosPerPage); i++) {
            pageNumbers.push(i);
        }

        const renderPageNumbers = pageNumbers.map(number => {
            return (
                <div
                    key={number}
                    id={number}
                    onClick={this.changeButtonState}
                >
                    {number}
                </div>
            );
        });

        return(
            <ReactTable

            columns={columns}
            data={data.result}
            defaultPageSize={10}
            noDataText={"Please Wait..."}
            className="bgcolor-att-light-gray"
            PadRowComponent={() => <span>&nbsp;</span>}


        >
            {// Exporting data into Xls sheet
                /*{(data, filteredData, instance) => {
                this.reactTable = data.pageRows.map(result => { return result._original});
                return(
                    <div>
                        {filteredData()}
                        <ExportToExcel result = {this.reactTable} />
                    </div>
                )
            }}*/}


        </ReactTable>

        )


        // return (<div>
        //     <Table responsive>
        //         <thead>
        //             <tr>
        //                 <th>HRAASSMNTID</th>
        //                 <th>DATASOURCENM</th>
        //                 <th>SURVEYNM</th>
        //                 <th>SURVEYSTATUS</th>
        //                 <th>RECORDUPDTDT</th>
        //                 <th>INSERTEDBY</th>
        //                 <th>VENDORSOURCENM</th>
        //                 <th>COMPLETIONDT</th>
        //                 <th>LOCATIONSOURCENM</th>
        //             </tr>
        //             {
        //                 currentTodos.map(function (member, i) {
        //                     return <tr><td>
        //                         {member.SURVEYNM === "Well-being assessment" ?
        //                             // <Link onClick={onSubmit} >
        //                             //     {member.HRAASSMNTID}</Link> : member.HRAASSMNTID}
        //                             <Link to={{ pathname: '/MemberHRAResponse', state: { data: data, hraassmntid: hraassmntid } }} >
        //                                 {member.HRAASSMNTID}</Link> : member.HRAASSMNTID}
        //                     </td>
        //                         <td>{member.DATASOURCENM}</td>
        //                         <td>{member.SURVEYNM}</td>
        //                         <td>{member.SURVEYSTATUS}</td>
        //                         <td>{Moment(member.RECORDUPDTDT).format("DD/MM/YYYY")}</td>
        //                         <td>{member.INSERTEDBY}</td>
        //                         <td>{member.VENDORSOURCENM}</td>
        //                         <td>{member.COMPLETIONDT === null ? null : Moment(member.COMPLETIONDT).format("DD/MM/YYYY")}</td>
        //                         <td>{member.LOCATIONSOURCENM}</td>
        //                     </tr>
        //                 })
        //             }
        //         </thead>
        //     </Table>
        //     <div class="page-numbers">
        //         <Col>
        //             <Link to={{ pathname: "memberDetails", state: this.props }}>Member Response</Link>
        //         </Col>
        //         <Col>
        //             {/* <Pagination result={data.result} buttonClick={this.changeButtonState.bind(this)} /> */}
        //             {renderPageNumbers}
        //         </Col>
        //     </div>

        // </div>


        // )


    }
}

