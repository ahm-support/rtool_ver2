'use strict';

import React from 'react';
import About from './About';

export default class News extends React.Component{

    render(){
        return(
            <div>
                <div className="main-wrapper">
                    <div className="container">
                        <div className="row">
                            <div className="fluid-space">
                                <div className="row">
                                    <div className="span12">

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <About />
                </div>
            </div>
        )
    }
}

