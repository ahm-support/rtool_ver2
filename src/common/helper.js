/**
 * Created by RBhatnagar on 4/8/2018.
 */
"use strict";
require('es6-promise').polyfill();
import fetch from 'isomorphic-fetch';
import superagent from 'superagent';
import co from 'co';
_ = require('lodash');
import Config from '../common/config.json';

module.exports = {
    returnData,
    setData,
    returnComponentData,
    getServiceUrl
};


/*
 * Method to fetch the data from API (Uses Isomorphic Fetch)
 * */
function returnData(urlName, url) {
    console.log(urlName, url);

    /* isomorphic-fetch code below*/

    let options = {
        /*credentials: 'same-origin',*/
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        }
    };
    /* if (overideOptions != null)
     options = overideOptions;*/
    return co(function* () {

        var res = yield fetch(url, options);
        console.log('Inside returnData res: ', res);
        var json = yield res.json();
        return json;
    }).catch(
        () => console.log("Can’t access " + url + " response. Blocked by browser?")
    );
}


export function setData(payload) {
    console.log(payload);
    return {
        payload: {
            type: 'FETCH_DATA_FULLFILMENT',
            value: payload

        }
    }
}

function setError(payload) {
    return {
        type: 'FETCH_DATA_ERROR',
        payload: payload
    }
}


function returnComponentData(componentName, memberPlanId) {
    console.log('In Helper' + componentName);
    var jsonPath = getServiceName(componentName, memberPlanId);
    // console.log(jsonPath);

    return co(function* () {
        // console.log('Inside returnJson: ');
        var json = jsonPath;
        //  console.log('Inside returnJson: ', json);
        return json;
    }).catch(
        () => console.log("Can’t access " + componentName)
    );

}



// function getServiceName(componentName, memberID) {
//     var restURL;
//     console.log('getServiceName=' + componentName);
//     switch (componentName) {

//         case 'Health Assessments': {
//             //return require('../js/mockups/gethra.json');
//             restURL = `http://${Config.hostUrl}${Config.mahServices.HealthAssessments}?app-id=${Config.appId}&memberId=${memberID}`;
//             return restURL;
//         }
//         case 'Trackers':
//             return require('../js/mockups/gettrackers.json');
//             // restURL=`http://${Config.hostUrl}${Config.mahServices.Trackers}?app-id=${Config.appId}&memberId=${memberId}`;
//             // return restURL;
//         case 'Health Actions':
//             return require('../js/mockups/gethealthaction.json');
//         case 'Reward':
//             return require('../js/mockups/getrewardsinfo.json');
//         case 'Incentives':
//             return require('../js/mockups/getIncentives.json');
//         // case 'Incentives':
//         // restURL = `http://${Config.hostUrl}${Config.mahServices.Incentives}?app-id=${Config.appId}&memberId=${memberID}`;
//         // return restURL;
//         case 'MemberDetails':
//             return require('../js/mockups/member.json');
//         case 'MemberHRAResponse':
//             return require('../js/mockups/getmemberhraresponse.json');
//         case 'healthCheck':
//             return require('../js/mockups/member.json');
//         case 'behaviors':
//             return require('../js/mockups/behavior.json');
//         case 'goals':
//             return require('../js/mockups/goals.json');
//         case 'activities':
//             return require('../js/mockups/activity.json');
//     }


function getServiceUrl(componentName, memberId) {

    console.log('componentName: ' + componentName);
    console.log('memberId: ' + memberId);
    const mahService = getServiceName(componentName);
    console.log('mahService: ', mahService);

    return `http://${Config.hostUrl}${mahService}?app-id=${Config.appId}&memberId=${memberId}`;
}

function getServiceName(componentName) {
    return _.get(Config, `mahServices[${componentName}]`)
}

// }