import React, {Component} from "react";
import ReactDOM from 'react-dom'; 

class Header extends Component {
    render() 
    {
        return(
        <div class="jumbotron">
        <div class="container text-center">
            <h1>NICE DevOps Services</h1>      
            <p>Making the Right Way the Easy Way &trade;</p>
            </div>
        </div>);
    }
}

ReactDOM.render(
    <Header/>,
    document.getElementById('header')
);