import { useState } from 'react'
import { FaTrashCan } from "react-icons/fa6";
import './App.css'

function App() {

  const [list, setList] = useState([])

  const [inputReset, setInputReset] = useState('')

function handleChange(e) {
        setInputReset(e.target.value)
      }

const handleAdd = (e) => {
      const inputValue = inputReset.trim()
     if (inputValue.length !== 0) { 
      setList([...list, inputValue])  
      setInputReset('')
     }  
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
            value={inputReset}
            autoFocus
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
