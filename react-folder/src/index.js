import React from 'react'
import ReactDOM from 'react-dom/client'

//...the expression is wrapped in the curly braces { }
const jsxWithExpression = <h1>I am {5 + 5} times better than before</h1>
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(jsxWithExpression)