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
          for (let i = 1; i < dataStringLines.length; i++) {
            const row = dataStringLines[i].split(',');
            out = [...out, row];
          }
          out = out.filter((row) => row.length > 0);
          console.log(out);
          invokeAPI(out)
        };
        reader.readAsBinaryString(file);
    }
    const invokeAPI = (input) => {
        fetch("http://localhost:8080/predict", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(input)
        }).then((response) => response.json())
        .then((data) => {
            console.log(data); 
            setOut(data);
        }).then(setBlank(false));
    }
    
    if (blank) {
    return (
        <div>
        <div className="resultsContainer">
            <h3>Upload Deposits through Excel</h3>
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