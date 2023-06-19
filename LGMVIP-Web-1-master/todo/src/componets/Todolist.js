import React from 'react';
import {CiCircleRemove} from "react-icons/ci"

const Todolist = (props) =>{
 
  return (
    <>
    <div className="todo_style">
    <CiCircleRemove 
    onClick = {()=>{
      props.onSelect(props.id);
    }}
      
    />     
    <li>{props.text}</li>
     </div>
      
    </>
  )
}

export default Todolist
