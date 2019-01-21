/**
 * Created by rbhatnagar on 4/18/2018.
 */

"use restrict";

import React from 'react';
import {Navbar, NavItem, NavbarBrand,Image, Nav, NavDropdown, MenuItem,Grid, Col, Row,FormGroup, FormControl, Button } from 'react-bootstrap';
import {Link} from 'react-router-dom';
import '../../css/CustomNavbar.css';

export default class NavBar extends React.Component {
    render(){
        return(
            <Navbar className="navbar-brand navbar-brand-img">
                <Navbar.Header>
                    <Navbar.Brand >
                    <img src="../../../images/rTool.png" weign="30" height="30"/><a href={"/search"}>Home</a>
                    </Navbar.Brand>
                </Navbar.Header>
                <Nav pullRight>
                    <NavItem eventKey={1} href={"about"}>
                        About
                    </NavItem>
                    <NavItem eventKey={2} href={"news"}>
                        News
                    </NavItem>
                    <NavDropdown eventKey={3} title="Environment" id="basic-nav-dropdown">
                        <MenuItem eventKey={3.1} href={"about"}>Prod</MenuItem>
                        <MenuItem eventKey={3.2} href={"about"}>Cert</MenuItem>
                        <MenuItem eventKey={3.3} href={"about"}>QA</MenuItem>
                        <MenuItem divider />
                        <MenuItem eventKey={3.4} href={"about"}>Dev</MenuItem>
                    </NavDropdown>
                </Nav>
            </Navbar>
        )
    }
}
