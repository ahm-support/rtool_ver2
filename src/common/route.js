/**
 * Created by RBhatnagar on 3/30/2018.
 */

"use strict";

import News from '../js/component/News';
import Member from '../js/component/Member';
import Search from '../js/component/Search';
import ServiceMain from '../js/component/ServiceMain';
import About from '../js/component/About';
import MemberDelegate from '../js/component/MemberDelegate';
import DCMemberDetails from '../js/component/DCMemberDetails';
import DCMemberService from '../js/component/DCMemberService';
import MemberHRAResponse from '../js/component/MemberHRAResponse';
import Trackers from '../js/component/Trackers';
import Login from '../js/component/Login';


import App from '../js/App.jsx';

const routes = [

    { path: '/login', exact:true, component:Login },
    { path: '/search', exact:true, component:Search },
    { path: '/about',exact:true, component:About },
    { path: '/member', exact:true,  component:Member },
    { path: '/service',exact:true,  component:ServiceMain },
    { path: '/news',exact:true,  component:News },
    { path: '/memberDetails', exact:true,  component:MemberDelegate },
    { path: '/dc', exact:true,  component:DCMemberDetails },
    { path: '/MemberHRAResponse', exact:true,  component:MemberHRAResponse },
    { path: '/dcService', exact:true,  component:DCMemberService },
    { path: '/Trackers', exact:true, component:Trackers}
];

export default routes;
