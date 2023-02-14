import React from "react";
import "./DisplayCard.css"
import CardObject from "./CardObject"
import sunny from "../images/happyalpaca.jpg"

function DisplayCard(){
    return (
        <div className = "card"> 
        <h1> Look At these! </h1>
        <div className = "card_container">
            <div className = "card_wrapper">
                <ul className = "card_objects"></ul>
                <CardObject
                src = {sunny}
                text = "Explore"
                label = "Adventure"
                path = "/services"
                />
                <CardObject
                src = {sunny}
                text = "Explore"
                label = "Adventure"
                path = "/services"
                />
            </div>
             </div>

        </div>


        )
}

export default DisplayCard;