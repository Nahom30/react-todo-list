import React from 'react' // requesting REACT 
import { render } from 'react-dom' //React library to render the component on the DOM
import App from '../components/App'

render( // calls render function

    // define the encompassing componenet, 
    // DOM element we want to mount it to 
    <App /> ,
    document.getElementById('app')


)