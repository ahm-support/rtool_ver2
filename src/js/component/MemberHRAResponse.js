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
import { Sidebar, SidebarItem, Link } from 'react-router-dom';
import Moment from 'moment';

export default class MemberHRAResponse extends React.Component {
    constructor(props) {
        super(props);

        let memberPlanId;
        if (history.state.state.type) {

            console.log('in type');
            console.log(history.state);
            memberPlanId = history.state.state.memberPlanId;
            console.log('MemberResponse memberPlanId - ', memberPlanId);
        } else {
            memberPlanId = history.state.state;
        }

        this.state = {
            memberID: history.state.state.data.memberID,
            hraassmntid: history.state.state.hraassmntid,
            result: [],
            currentPage: 1, //for pagination
            todosPerPage: 10
        }
        console.log(history.state.state.data.memberID);
        console.log(history.state.state.hraassmntid);
    }

    componentWillMount() {
        console.log('Component Mount in MemberHRAResponse');
        const memberID = history.state.state.memberID;
        const hraassmntid = history.state.state.hraassmntid;
        this.callApi(hraassmntid);
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

    callApi(hraassmntid) {
        console.log('Call API');
        const restURL = `http://${Config.hostUrl}${Config.mahServices.MemberResponse}?app-id=${Config.appId}&hraassmntId=${hraassmntid}`;
        returnData('fetchData', restURL).then((data) => {
            this.setState({
                result: data

            })
        });
        // returnComponentData("MemberHRAResponse").then((data) => this.setState({ result: data }));
    }

    render() {
        const { aetnaCumbId, result, currentPage, todosPerPage,memberID } = this.state;
        const indexOfLastTodo = currentPage * todosPerPage;
        const indexOfFirstTodo = indexOfLastTodo - todosPerPage;


        const currentTodos = this.state.result.slice(indexOfFirstTodo, indexOfLastTodo);


        // Logic for displaying page numbers
        const pageNumbers = [];
        for (let i = 1; i <= Math.ceil(this.state.result.length / todosPerPage); i++) {
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

        return (
            <div>
                <Grid>
                    <Row>
                        <Col>
                            <Link to={{
                                pathname: '/service',
                                state: { memberID: this.state.memberID, name: 'Health Assessments' }
                            }} >
                                <Image title="Back" src="../../../images/arrowImg.png" style={{ width: 20, height: 20 }} />
                            </Link>
                        </Col>
                    </Row>
                    <Table responsive>
                        <thead>
                            <tr>
                                <th>HRAASSMNTID</th>
                                <th>QUESTIONTEXT</th>
                                <th>ANSWERTEXT</th>
                                <th>RESPONSEVALUE</th>
                                <th>RESPONSEDT</th>
                                <th>RECORDINSERTDT</th>
                                <th>RECORDUPDTDT</th>
                            </tr>
                            {
                                currentTodos.map(function (member, i) {
                                    return <tr>
                                        <td>{member.HRAASSMNTID}</td>
                                        <td>{member.QUESTIONTEXT}</td>
                                        <td>{member.ANSWERTEXT}</td>
                                        <td>{member.RESPONSEVALUE}</td>
                                        <td>{Moment(member.RESPONSEDT).format("DD/MM/YYYY")}</td>
                                        <td>{Moment(member.RECORDINSERTDT).format("DD/MM/YYYY")}</td>
                                        <td>{Moment(member.RECORDUPDTDT).format("DD/MM/YYYY")}</td> </tr>
                                })
                            }
                        </thead>
                    </Table>

                </Grid>
            </div>)
    }
}

