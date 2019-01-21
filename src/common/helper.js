/**
 * Created by RBhatnagar on 4/8/2018.
 */
"use strict";
require('es6-promise').polyfill();
import fetch from 'isomorphic-fetch';
import superagent from 'superagent';
import co from 'co';

module.exports = {
    returnData,
    setData,
    returnJson
};


/*
 * Method to fetch the data from API (Uses Isomorphic Fetch)
 * */
function returnData(urlName, url) {
    console.log(urlName, url);
    /* isomorphic-fetch code below*/

    let options = {
        credentials: 'same-origin',
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        }
    };
    /* if (overideOptions != null)
     options = overideOptions;*/
    return co(function* () {
        console.log('Inside returnData: ');

        var res = yield fetch(url, options);
        console.log('Inside returnData res: ', res);
        var json = yield res.json();
        console.log('Inside returnData: ', json);
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


function returnJson(componentName) {
    console.log('In Helper' + componentName);
    var jsonPath = getMockJsonfile(componentName);
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

function getMockJsonfile(componentName) {
    switch (componentName) {
        case 'Health Assessments':
            return require('../js/mockups/gethra.json');
        case 'Trackers':
            return require('../js/mockups/gettrackers.json');
        case 'Health Actions':
            return require('../js/mockups/gethealthaction.json');
        case 'Reward':
            return require('../js/mockups/getrewardsinfo.json');
        case 'Incentive':
            return require('../js/mockups/getIncentive.json');
        case 'MemberDetails':
            return require('../js/mockups/member.json');
        case 'MemberResponse_HRA':
            return require('../js/mockups/getmemberhraresponse.json');
        case 'healthCheck':
            return require('../js/mockups/member.json');
        case 'behaviors':
            return require('../js/mockups/behavior.json');
        case 'goals':
            return require('../js/mockups/goals.json');
        case 'activities':
            return require('../js/mockups/activity.json');
    }

}