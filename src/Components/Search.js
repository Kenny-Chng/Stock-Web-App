
import React from "react"
import { useState } from "react";
import "../Components/Search.css";
import axios from "axios";


function Search(){
  const [api, setapi] = useState("")
  const [filter, setfilter] = useState ("")


    const getAPI = (apifilter) => {
      axios.get(`https://financialmodelingprep.com/api/v3/profile/${apifilter}?apikey=b38c8d22af3d6f46776e3639614f4339`).then((response) => {
         setapi(response.data[0])
         console.log(response)
      })
    }
    const handlefilter = (e) =>{
      e.preventDefault();
  console.log(filter)
  }
    return(

      <div>



      <div >

      <form className = "searchbar" onSubmit = {handlefilter}>
    
    
    <div >
    <textarea 
    className = "searchbartext"
    type = "text" 
    value = {filter} 
    placeholder = "Insert Company's NASDAQ Code"
    required onChange = {(e) => setfilter(e.target.value)} />
    <button className="searchbutton" onClick = {() => getAPI(filter)}> 
     <i className="searchbutton" class = "fa fa-search"/>
    
    </button>

    </div>

</form>

</div>


      
      
<table className="tablechart">
<tr>
  <th> Company Logo</th>
  <th> NASDAQ Symbol </th>
  <th> Company Name </th>
  <th> Current Price </th>
  <th> Currency </th>
  <th> Market Cap </th>
  <th> Description </th>
</tr>
<tr>
  <td><img className = "companylogo" src = {`${api.image}`} 
      >
      </img></td>
  <td>{api.symbol}</td>
  <td>{api.companyName}</td>
  <td>{api.price}</td>
  <td>{api.currency}</td>
  <td>{api.mktCap} Shares</td>
  <td>{api.description}</td>

</tr>
</table>


      </div>

    )

    };

    export default Search