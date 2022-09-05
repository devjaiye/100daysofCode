//...React uses the function "ReactDOM.render()" to load in a web page
//...The ReactDOM.render() function takes 2 arguments, 

//. 1. HTML code and 2. an HTML element.

//...The purpose of the function is to display the specified HTML 
//...code inside the specified HTML element.

//..our React code is rendered inside the index.html file which is found in the public folder


//.. note: this code should be placed inside the index.js
import React from "react";

const tableData = (
    <table>
        <tr>
            <th>Classes</th>
        </tr>
        <tr>
            <td>Class 2</td>
        </tr>
        <tr>
            <td>Class 3</td>
        </tr>
    </table>
)

const root2 = ReactDOM.createRoot(document.getElementById('root'))
root2.render(tableData)