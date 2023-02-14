import React from "react";
import { useState , useEffect} from "react";

function FormTest(){
    const [testname, changeTestName] = useState("")

const handleSubmit = (e) =>{
    e.preventDefault();
console.log(testname)
}

    return (
        <form onSubmit = {handleSubmit}>
            <div>
            <label> Hello!</label>
            <textarea type = "text" value = {testname} required onChange = {(e) => changeTestName(e.target.value)} />
            <button onClick ={() => changeTestName (console.log(testname+1))}> asdasdasd</button>
            </div>

        </form>
    )
}

export default FormTest;