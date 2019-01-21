/**
 * Created by RBhatnagar on 4/3/2018.
 */
"use restrict";

import React from 'react';
import routes from './route';
import {BrowserRouter as Router, Route } from 'react-router-dom';


class RouterComponent extends React.Component {
    render() {
        return(
            <Router>
            <div className="fluid-space no-pad span12">
                <section>
                    <ul> { routes.map((route) => ( <Route key={route.path} path={route.path} component={route.component} /> )) } </ul>
                </section>
            </div>
            </Router>
        )
    }
}

export default RouterComponent;