import React from 'react'
import ReactDOM from 'react-dom/client'

//..To write HTML on multiple lines, put the HTML inside parentheses
const myList = (
    <ul>
        <li>Rice</li>
        <li>Beans</li>
        <li>Garri</li>
        <li>Maize</li>
    </ul>
)

ReactDOM.createRoot(document.getElementById('root')).render(myList)
