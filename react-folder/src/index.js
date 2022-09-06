import React from 'react'
import ReactDOM from 'react-dom/client'


//..if you are using multiple elements wrap them inside a parent <div> or fragment <>
const multipleElements = (
    <div>
    <p>Hello world 1</p>
    <p> Hello world 2</p>
    </div>
    )

    ReactDOM.createRoot(document.getElementById('root')).render(multipleElements)
    


