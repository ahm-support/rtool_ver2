/**
 * Created by RBhatnagar on 3/27/2018.
 */

"use strict";
import 'babel-polyfill';
require('es6-promise').polyfill();
import React from 'react';
_ = require('lodash');
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import NavBar from "./NavBar";
import Pagination from './Pagination';
import { Table, Grid, Col, Row } from 'react-bootstrap';
import { returnData, setData, returnJson } from '../../common/helper';
import Moment from 'moment';
import Axios from 'axios';


export default class Member extends React.Component {
    constructor(props) {
        super(props);

        let memberPlanId;
        if (history.state.state.type) {
            console.log('in type', history.state.state.type);
            memberPlanId = history.state.state.memberPlanId;
            console.log('MemberDetails memberPlanId - ', memberPlanId);
        } else {
            memberPlanId = history.state.state;
        }

        this.state = {
            memberPlanId: memberPlanId,
            result: [],
            currentPage: 1, //for pagination
            todosPerPage: 5 //for pagination

        }

    }

    componentWillMount() {
        this.callApi(this.state.memberPlanId);
    }

    componentDidMount() {
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
        returnJson("MemberDetails").then((data) => this.setState({
            result: data,
        }));
    }
    //for pagination
    changeButtonState(event) {
        console.log('active page is' + Number(event.target.id));
        this.setState({ currentPage: Number(event.target.id) })
    }

    render() {
        const { memberPlanId, result, currentPage, todosPerPage } = this.state;
        const indexOfLastTodo = currentPage * todosPerPage;
        const indexOfFirstTodo = indexOfLastTodo - todosPerPage;
        const currentTodos = this.state.result.slice(indexOfFirstTodo, indexOfLastTodo);
        const renderTodos = (<Table responsive>
            <thead>
                <tr>
                    <th>MEMBERPLANID</th>
                    <th>FULLNM</th>
                    <th>MEMBERTYPECODE</th>
                    <th>DTOFBIRTH</th>
                    <th>GENDER</th>
                    <th>MEMBERSTATUS</th>
                    <th>AHMSUPPLIERID</th>
                    <th>ORGNM</th>
                    <th>PLANGROUPID</th>
                    <th>EFFECTIVESTARTDT</th>
                    <th>EFFECTIVEENDDT</th>
                </tr>
                {
                    currentTodos.map(function (member, i) {
                        return <tr><td>{member.PRIMARYMEMBERPLANID}</td>
                            <td>{member.FULLNM}</td>
                            <td>{member.MEMBERTYPECODE}</td>
                            <td>{Moment(member.DTOFBIRTH).format("DD/MM/YYYY")}</td>
                            <td>{member.GENDER}</td>
                            <td>{member.MEMBERSTATUS}</td>
                            <td>{member.AHMSUPPLIERID}</td>
                            <td>{member.ORGNM}</td>
                            <td>{member.PLANGROUPID}</td>
                            <td>{Moment(member.EFFECTIVESTARTDT).format("DD/MM/YYYY")}</td>
                            <td>{member.EFFECTIVEENDDT === null ? null : Moment(member.EFFECTIVEENDDT).format("DD/MM/YYYY")}</td>
                        </tr>
                    })
                }
            </thead>
        </Table>)


        return (
            <div>
                <Grid>
                    <Row><NavBar /></Row>
                    <br />
                    <br />
                    <Row>
                        <Col><h2>Member Details -</h2>
                            <p>Primary account information</p>
                        </Col>
                    </Row>
                    <br />
                    <br />
                    {renderTodos}
                    <div class="page-numbers">
                        <Col>
                            <Link to={{ pathname: "memberDetails", state: this.state }}>Member Details</Link>
                        </Col>
                        <Col>

                            <Pagination result={this.state.result} buttonClick={this.changeButtonState.bind(this)} />

                        </Col> </div>
                </Grid>
            </div>
        )
    }
}


//     render() {

//         // var indexOfLastTodo = this.state.activePage * this.state.itemPerPage;
//         // var indexOfFirstTodo = indexOfLastTodo - this.state.itemPerPage;
//         // var renderedProjects = this.state.result.slice(indexOfFirstTodo, indexOfLastTodo);

//         return (
//             <div>
//                 <Grid>
//                     <Row><NavBar /></Row>
//                     <br />
//                     <br />
//                     <Row>
//                         <Col><h2>Member Details</h2>
//                             <p>Primary account information</p>
//                         </Col>
//                     </Row>
//                     <br />
//                     <br />
//                     <Table responsive>
//                         <thead>
//                             <tr>
//                                 <th>MEMBERPLANID</th>
//                                 <th>FULLNM</th>
//                                 <th>MEMBERTYPECODE</th>
//                                 <th>DTOFBIRTH</th>
//                                 <th>GENDER</th>
//                                 <th>MEMBERSTATUS</th>
//                                 <th>AHMSUPPLIERID</th>
//                                 <th>ORGNM</th>
//                                 <th>PLANGROUPID</th>
//                                 <th>EFFECTIVESTARTDT</th>
//                                 <th>EFFECTIVEENDDT</th>
//                             </tr>
//                             {
//                                 this.state.result.map(function (member, i) {
//                                     return <tr>
//                                         <td>{member.PRIMARYMEMBERPLANID}</td>
//                                         <td>{member.FULLNM}</td>
//                                         <td>{member.MEMBERTYPECODE}</td>
//                                         <td>{Moment(member.DTOFBIRTH).format("DD/MM/YYYY")}</td>
//                                         <td>{member.GENDER}</td>
//                                         <td>{member.MEMBERSTATUS}</td>
//                                         <td>{member.AHMSUPPLIERID}</td>
//                                         <td>{member.ORGNM}</td>
//                                         <td>{member.PLANGROUPID}</td>
//                                         <td>{Moment(member.EFFECTIVESTARTDT).format("DD/MM/YYYY")}</td>
//                                         <td>{member.EFFECTIVEENDDT === null ? null : Moment(member.EFFECTIVEENDDT).format("DD/MM/YYYY")}</td>\
//                                          </tr>

//                                 }
//                             )
//                             }
//                         </thead>
//                         </Table>
//                             <div class="d-flex justify-content-center">
//                             <Pagination
//                               activePage={this.state.activePage}
//                             //   itemsCountPerPage={10}
//                             //   totalItemsCount={450}
//                             //  pageRangeDisplayed={5} // this is the number 1,2,3,4,5
//                             //  onChange={this.handlePageChange.bind(this)}
//                              itemClass='page-item'
//                              linkClass='page-link'
//                             />
//                              </div>


//                     <Col md="10"></Col>
//                     <Col>
//                         <Link to={{pathname: "memberDetails", state: this.state}}>Member Details</Link>
//                     </Col>


//                 </Grid>
//             </div>
//         )
//     }
// }

//const restURL = "http://localhost:4001/ahm/health-assessments?app-id=testing&q=1720874840";