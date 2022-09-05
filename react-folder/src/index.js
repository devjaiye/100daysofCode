import React from 'react';
import ReactDOM from 'react-dom/client';

// const myfirstElement = <h1>Hello there</h1>
// const root = ReactDOM.createRoot(document.getElementById('root'))
// root.render(myfirstElement)

//. ReactDOM.render(<p>My React Render HTML doc</p>, document.getElementById('root'))


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