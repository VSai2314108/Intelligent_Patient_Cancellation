import * as XLSX from 'xlsx';
import { useState } from 'react';
import React, {Component} from 'react';
import {Container} from "react";
import DataTable from 'react-data-table-component';
import "./css/sheetupload.css" 
import picture from './package-lock.png'

function Schedule() {

    const [blank, setBlank] = useState(true);
    const [out, setOut] = useState([]);


    const handleFileUpload = e => {
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.onload = (evt) => {
            /* Parse data */
            const bstr = evt.target.result;
            const wb = XLSX.read(bstr, { type: 'binary' });
            /* Get first worksheet */
            const wsname = wb.SheetNames[0];
            const ws = wb.Sheets[wsname];
            /* Convert array of arrays */
            const data = XLSX.utils.sheet_to_csv(ws, { header: 1 });
            const dataStringLines = data.split(/\r\n|\n/);
            let out = [];
            let whole = []
            for (let i = 1; i < dataStringLines.length; i++) {
                const row = dataStringLines[i].split(',');
                const processed = row.slice(4,)
                out = [...out, processed];
                whole = [...whole, row]
            }
            out = out.filter((row) => row.length > 0);
            for (let i = 0; i < out.length; i++) {
                // convert all entires but the second to ints
                for (let j = 0; j < out[i].length; j++) {
                    if (j != 1) {
                        out[i][j] = parseInt(out[i][j]);
                    }
                }
                out[i][1] = Math.min(out[i][1]/100.00, 1);
            }

            whole = whole.filter((row) => row.length > 0);
            invokeAPI(out,whole);
        };
        reader.readAsBinaryString(file);
    }
    const invokeAPI = (input,whole) => {
        fetch("http://localhost:8080/predict", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(input)
        }).then((response) => response.json())
        .then((data) => {
            console.log(data); 
            // add the last element of the array to the same index of output
            for (let i = 0; i < data.length; i++) {
                whole[i] = [...whole[i], data[i][0]];
            }
            // convert first element to str in whole
            for (let i = 0; i < whole.length; i++) {
                whole[i][4] = whole[i][4] == "1" ? "Male" : "Female";
                whole[i][6] = whole[i][6] == "1" ? "Yes" : "No";
                whole[i][7] = whole[i][7] == "1" ? "Yes" : "No";
                whole[i][8] = whole[i][8] == "1" ? "Yes" : "No";
                whole[i][9] = whole[i][9] == "1" ? "Yes" : "No";
                whole[i][10] = whole[i][10] == "1" ? "Yes" : "No";
                whole[i][11] = whole[i][11] == "1" ? "Yes" : "No";
                whole[i][12] = whole[i][12] == "1" ? "No Show" : "Show";
            }
            console.log(whole)
            setOut(whole)
        }).then(setBlank(false));
    }
    
    if (blank) {
        return (
            <div>
            <div className="resultsContainer">
                <h3 id="title">Upload Patient Schedule</h3>
              <center>
              <input
                type="file"
                accept=".csv,.xlsx,.xls"
                onChange
                ={handleFileUpload}
                />
              </center>
                
                <br></br>
               <center><img src={picture} height = "200" width = "250" alt="Logistic Regression" class ="center"/></center>
                
            </div>
            </div>
        );
    }
    else {
    
            // one xlxs table for arrays in out where the last element is show
            // one xlxs table for arrays in out where the last element is no show and the second to last element is no
            // one xlxs table for arrays in out where the last element is no show and the second to last element is yes
            
        var heading = [['Name','Number','Date','Time','Gender','Age','Welfare','Hypertension','Diabetes','Alcoholism','Handicap','SMS Received','Show/No Show']];

        var noshow = out.filter((row) => row[12] == "No Show");

        var show = out.filter((row) => row[12] == "Show");

        var noshowyes = noshow.filter((row) => row[11] == "Yes");

        var noshowno = noshow.filter((row) => row[11] == "No");

        //convert show into dictionary using heading as keys
        var showDict = show.map((row) => {
            var dict = {};
            for (let i = 0; i < row.length; i++) {
                dict[heading[0][i]] = row[i];
            }
            return dict;
        });

        var noshownoDict = noshowno.map((row) => {
            var dict = {};
            for (let i = 0; i < row.length; i++) {
                dict[heading[0][i]] = row[i];
            }
            return dict;
        });

        var noshowyesDict = noshowyes.map((row) => {
            var dict = {};
            for (let i = 0; i < row.length; i++) {
                dict[heading[0][i]] = row[i];
            }
            return dict;
        });

        //conver heading into dictionary that fits the DataTable type
        var headingDict = heading[0].map((row) => {
            var dict = {};
            dict['name'] = row;
            dict['selector'] = row;
            return dict;
        });

        return (
            <div>
                <h5>Likely to Show Patients</h5>
                <DataTable class = "show"
                    columns={headingDict}
                    data={showDict}>
                </DataTable>
                <br></br>
                <h5>Not Likely to Show Patients: Send SMS</h5>
                <DataTable
                    columns={headingDict}
                    data={noshownoDict}>
                </DataTable>
                <br></br>
                <h5>Not Likely to Show Patients regardless of SMS</h5>
                <DataTable
                    columns={headingDict}
                    data={noshowyesDict}>
                </DataTable>
            </div>
            
        );
    }
}


export default Schedule;