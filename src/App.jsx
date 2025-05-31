import { useState } from 'react'
import { FaTrashCan } from "react-icons/fa6";
import './App.css'

function App() {
  const [list, setList] = useState([])
  const [inputValues, setInputValues] = useState()

const handleAdd = (e) => {
      console.log('')
      const inputValue = document.getElementById("input").value.trim();
     if (inputValue.length !== 0) { 
      setList([...list, inputValue])  
      setInputValues('')
     }  
    }

function handleChange(e) {
        setInputValues(e.target.value)
      }
      function handleDelete(items) {
      const newList = list.filter(item => item !== items)
      setList(newList)
  }
  return (
    <>
     <div className='todo-container'>
     <h2 className='todo-tittle'>Todo List</h2>

     <div className='add-todo'>
     <input type='text'
            onChange={handleChange}
            id='input'
            value={inputValues}
            placeholder='Enter Todos' 
            className='input-todo'
      />
      <button onClick={handleAdd}>ADD</button>
      </div>
    {   
       list.length == 0 ? <div className='center'>Nothing to do</div> : list.map((item, i) => {
        return (
        <div className='each-item' key={i} id={`Item${i}`}>
        <li>{item}</li>
        <FaTrashCan 
             className='delete-icon'
             onClick={()=>handleDelete(item)}
        />
       </div>)
        } )
    }
     </div>
    </>
  )
}

export default App
