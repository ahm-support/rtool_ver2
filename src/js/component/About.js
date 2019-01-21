'use strict';

import React from 'react';
import {Jumbotron, Grid, Row, Col, Image, Button} from 'react-bootstrap';
import '../../css/About.css';

//const img = require('../../images/rajeev.png');

export default class About extends React.Component{

    render(){
        return(
            <div>

                <Grid>
                    <Row>
                        <Col md={1}></Col>
                        <Col md={10}><Image src="../../../images/cheetah-technology-header.jpg" className="header-image" /></Col>
                        <Col md={1}></Col>
                    </Row>
                    <Row>
                        <Col md={1}></Col>
                    <Col md={4}>
                        <h2>DATA ANALYTICS</h2>
                        <p2>
                            Data analysis is a process of inspecting, cleansing, transforming, and modeling data with the goal of discovering useful information, suggesting conclusions, and supporting decision-making. Data analysis has multiple facets and approaches, encompassing diverse techniques under a variety of names, in different business, science, and social science domains.
                            Data mining is a particular data analysis technique that focuses on modeling and knowledge discovery for predictive rather than purely descriptive purposes, while business intelligence covers data analysis that relies heavily on aggregation, focusing on business information.[1] In statistical applications, data analysis can be divided into descriptive statistics, exploratory data analysis (EDA), and confirmatory data analysis (CDA). EDA focuses on discovering new features in the data and CDA on confirming or falsifying existing hypotheses. Predictive analytics focuses on application of statistical models for predictive forecasting or classification, while text analytics applies statistical, linguistic, and structural techniques to extract and classify information from textual sources, a species of unstructured data. All are varieties of data analysis.
                        </p2>
                    </Col>
                        <Col md={2}></Col>
                   <Col md={4}>
                       <Image src="../../../images/rajeev.png" className="about-profile-pic" rounded />
                       <h2>Rajeev B</h2>
                       <p> M.Tech in Digital systems (MNNIT, Allahabad, UP)</p>
                   </Col>
                        <Col md={1}></Col>
                    </Row>
               </Grid>
            </div>
        )
    }
}

