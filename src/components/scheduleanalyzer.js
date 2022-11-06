import * as XLSX from 'xlsx';
import { useState } from 'react';


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
            console.log(out,whole);
            invokeAPI(out,whole)
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
                input[i] = [...input[i], data[i][0]];
            }
            console.log(input)
            setOut(input)
        }).then(setBlank(false));
    }
    
    if (blank) {
        return (
            <div>
            <div className="resultsContainer">
                <h3>Upload Patient Schedule</h3>
                <input
                type="file"
                accept=".csv,.xlsx,.xls"
                onChange={handleFileUpload}
                />
            </div>
            </div>
        );
    }
    else {
        return (
            <p> This Patient has a {out} </p>
        );
    }
}
export default Schedule;