import React from 'react';
import ReactDOM from 'react-dom/client';

//...JSX example code 

//..react variale accepting h1 element
const myText = <h1>Displaying a JSX text</h1> 

//..created a root varialve to call the root id from index.html in the public folder
const root = ReactDOM.createRoot(document.getElementById('root'))

//..rendering the text 
root.render(myText)