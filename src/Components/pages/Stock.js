import React from "react"

import "../../App.css"
import Searchdisplay from "../searchdisplay"
import Search from "../Search"

export default function Stock(){
    return (<>
    {/* <h1 className = "recipes"> Recipes </h1> */}
    <Searchdisplay/>
         <Search/>
    </>)

}