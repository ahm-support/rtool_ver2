/**
 * Created by rbhatnagar on 4/26/2018.
 */
'use strict';
import React from 'react';
import {Link, Redirect} from 'react-router-dom';
import '../../css/Login.css';
import users from '../../common/users.json';
import {form, FormGroup, ControlLabel, FormControl, Button, Image, Grid, Row, Col, Navbar, Alert} from 'react-bootstrap';
const _ = require('lodash');
export default class Login extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            redirectToReferrer: false,
            show: false
        };
    }

    validateForm() {
        return this.state.email.length > 0 && this.state.password.length > 0;
    }

    handleChange(event) {

        event.preventDefault();
        this.setState({[event.target.id]: event.target.value});
    }

    handleSubmit(event) {
        event.preventDefault();
        console.log( 'Here is the state obj: ', this.state);
        console.log('DB data: ', users);

         let notValid = false;
         _.each(users.credendials, (user) => {
         if (_.isEqual(this.state.email, user.email) && _.isEqual(this.state.password, user.password)) {
             this.setState({redirectToReferrer: true});
             console.log('Authentication Successful!!');
         } else {
             this.setState({show: true});
             console.log('Authentication Failed!!');

         }
         });
    }

    render() {

        //const { from } = this.props.location.state || { from: { pathname: "/" } };
        const {redirectToReferrer} = this.state;
        const {show} = this.state;
        if (redirectToReferrer) {
            return <Redirect to={"/home"}/>;
        } else if (show) {
            return (
                <Alert bsStyle="Info">
                    <strong>Sorry!</strong> Either your Email or password is incorrect.
                    Please try again.
                </Alert>
            )
        }
        else {
            return (
                <div className="Login">

                    <Navbar inverse>
                    </Navbar>

                    <form onSubmit={(event) => this.handleSubmit(event)}>
                        <Image src="../../../images/rTool.png"/>
                        <FormGroup controlId="email" bsSize="large">
                            <ControlLabel>Email</ControlLabel>
                            <FormControl
                                autoFocus
                                type="email"
                                value={this.state.email}
                                onChange={(event) => this.handleChange(event)}
                            />
                        </FormGroup>
                        <FormGroup controlId="password" bsSize="large">
                            <ControlLabel>Password</ControlLabel>
                            <FormControl
                                value={this.state.password}
                                onChange={(event) => this.handleChange(event)}
                                type="password"
                            />
                        </FormGroup>
                        <Grid><Col md="1">
                        </Col><Col>
                            <Button
                                bsStyle="primary"
                                //disabled={!this.validateForm()}
                                type="submit"
                            >
                                Login
                            </Button>
                        </Col>
                        </Grid>
                    </form>
                </div>
            );
        }
    }
}
//this.state.email.length > 0 && this.state.password.length > 0;
