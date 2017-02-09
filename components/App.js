import React, { Component } from 'react' //every component need react library. {Component} pullying out syntax for React
//class App extends Component {// define the App class from Component extend componet from React library 
class App extends Component {
    render() { //every component needs a render function 
        return <div> This is definitely a React app now! </div>
    }
}
export default App //sends it to import package i.e client.js