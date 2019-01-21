"use restrict";

import React from 'react';
import {Navbar, NavItem, NavbarBrand, Nav, NavDropdown, MenuItem,Grid, Col, Row,FormGroup, FormControl, Button } from 'react-bootstrap';
import {Link} from 'react-router-dom';
import '../../css/CustomNavbar.css';
import RouterComponent from '../../common/RouterComponent';

export default class CustomNavbar extends React.Component{

    render(){
        return(
        <Navbar className="navbar-header" bsStyle="inverse">
            <Navbar.Header>
                <Navbar.Brand >
                    <a href="#home"><Link to="/home"><h2>Home</h2></Link></a>
                </Navbar.Brand>
                <Navbar.Brand className="text-deco">
                    <a href="#home"><Link to="/hoa"><h2>HOA</h2></Link></a>
                </Navbar.Brand>
            </Navbar.Header>
            <Nav pullRight>
                <NavItem eventKey={1} componentClass={Link} href="/about" to="/about">
                    About
                </NavItem>
                <NavItem eventKey={2} componentClass={Link}  href="/news" to="/news">
                    News
                </NavItem>

                <NavDropdown eventKey={3} title="Let's Go" id="basic-nav-dropdown">
                    <MenuItem eventKey={3.1}><Link to="/spHome">Member Details</Link></MenuItem>
                    <MenuItem eventKey={3.2}><Link to="/news">Member...</Link></MenuItem>
                    <MenuItem eventKey={3.3}><Link to="/about">QA</Link></MenuItem>
                    <MenuItem eventKey={3.4}><Link to="/news">DEV</Link></MenuItem>
                    <MenuItem divider />
                    <MenuItem eventKey={3.5}>Separated link</MenuItem>
                </NavDropdown>
            </Nav>
        </Navbar>
        )
    }
}