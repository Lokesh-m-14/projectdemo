
import React, {useState}  from 'react'

export default function Form(){
    const[input,setInput]=useState("")
    const[input2,setInput2]=useState("")
    const handler=(e)=>{
        setInput(e.target.value)
    }
    const handler2=(e)=>{
        setInput2(e.target.value)
    }

    function output(){
        console.log(input);
        console.log(input2);
    }
    
    return(
        <div>
        <form>
            <h1>Form</h1>
            <label>
            Enter Username:<input type="text" onChange={handler}></input><br/><br/>
            </label>
            <label>
            Enter Number:<input type="number" onChange={handler2}></input><br/><br/>
            </label>
            <button onClick={output} type="button">submit</button>
        </form>
            
        </div>
    ) 
}