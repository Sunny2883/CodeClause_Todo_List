import React, { useState } from 'react';
import Todolist from './Todolist';
import "./Todo.css";

const Todo = () => {
  const [inputList,setInputList]=useState("");
  const [Items,setItems] = useState([]);
  

  const itemEvent = (event) =>{
    setInputList(event.target.value);
  };
  const listOfItems =() =>{
    setItems((olditems)=>{
      return [...olditems,inputList];
    });
    setInputList("");
  };
  const deleteItem = (id) =>{
    console.log("deletd");
    setItems((olditems)=>{
      return olditems.filter((arrElem,index)=>{
        return index !== id;
      });
    });
  };
  return (
    <>
     <div className="main-div">
      <div className="centre-div">
        <br/>
        <h1>ToDo List</h1>
        <br/>
        <input 
        type="text" 
        placeholder="Add a Items" 
        value={inputList} 
        onChange={itemEvent}/>
        <button onClick={listOfItems}> + </button>
        <ol>
       { Items.map((itemval,index)=>{
          return <Todolist 
          key={index} 
          id={index}
          text={itemval} 
          onSelect={deleteItem}/>
        })}
      </ol>
      </div>
      
    </div>
    </>
  )
}

export default Todo
