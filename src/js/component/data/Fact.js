/**
 * Created by RBhatnagar on 4/6/2018.
 */

"use strict";
import React from 'react';
import ReactJson from 'react-json-tree';
export default function Fact(props) {
    let data = [];
    const theme = {
        scheme: 'monokai',
        author: 'wimer hazenberg (http://www.monokai.nl)',
        base00: '#272822',
        base01: '#383830',
        base02: '#49483e',
        base03: '#75715e',
        base04: '#a59f85',
        base05: '#f8f8f2',
        base06: '#f5f4f1',
        base07: '#f9f8f5',
        base08: '#f92672',
        base09: '#fd971f',
        base0A: '#f4bf75',
        base0B: '#a6e22e',
        base0C: '#a1efe4',
        base0D: '#66d9ef',
        base0E: '#ae81ff',
        base0F: '#cc6633'
    };
    data = props.res;
    type = props.type;
    console.log("Rajeev Here...", props.res, props.type);
    console.log("Rajeev Here 2...", props.type);
    processResponse(data);
    return (
        <div>
            <ReactJson data={data} theme={theme} invertTheme hideRoot shouldExpandNode={() => false}/>
        </div>
    )
}

function processResponse(resp){

    const res = resp;
    console.log('resp:::::: ', resp);

    return;
}
