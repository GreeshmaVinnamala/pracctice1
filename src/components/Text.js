import React, { useState } from "react";
const Text=()=>{
    const [input,setInput]=useState("");
    const handleChange=(event)=>{
        setInput(event.target.value);
    }
    return (
        <>
         <input type='text' onChange={handleChange}/>
         <h1>Input:{input}</h1>
        </>
    )
}
export default Text;