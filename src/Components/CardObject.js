import React from "react";
import {Link} from "react-router-dom"


function CardObject(props){
    return (
        <li className = "cards_object">
            <Link 
            className = "card_object_link" to = {props.path}>
                    <figure className = "card_object_pic-wrap" data-category = {props.label}>
                        <img src = {props.src} className = "card_object_image" />
                    </figure>
                    <div className = "card_object_info">
                        <h5 className = "card_object_text"> {props.text}</h5>
                    </div>
            </Link>
        </li>
    )
}

export default CardObject;