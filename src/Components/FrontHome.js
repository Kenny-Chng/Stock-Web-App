import React from 'react';
import "./FrontHome.css";
import "../App.css";
import {Button} from "./Button.js"
import Video from "../images/test.mp4"


function FrontHome(){
return(
<div className = "hero-container">
    <video src = {Video} autoPlay muted loop/>  
    <h1> Learn about investing and how the stock market works </h1>
    <p> Get Real Time Stock Prices On Your Favourite Companies </p>
    <div className = "hero-btn">
        <Button 
        className = "btn"
        buttonStyle = "btn-outline"
        buttonSize = "btn-large">
            About Me
        </Button>
        <Button 
        className = "btn"
        buttonStyle = "btn-primary"
        buttonSize = "btn-large">
            Search a Stock <i className = "far fa-play-circle"/>
        </Button>
    </div>
</div>

);

};
export default FrontHome;
