import React, { useEffect, useState } from 'react'

const Task = () => {
    let task = 0;
    //const countA=useState(0);
    //const count=countA[0];
    //const setCount=countA[1];
    const [count,setCount]=useState(0)
    useEffect(()=>{
        document.title=`${count} new messages`;
    },[]);
       const handleClick=(task) =>{
        setCount(count+1);
        console.log("Add task");
        task++
    }
  return (
    <>
      <h1>Task:{task}</h1>
      <h1>Tasks:{count}</h1>
      <button onClick={handleClick}>Task</button>
    </>
  )
}

export default Task
