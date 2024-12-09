import React, { useState } from 'react'
import './Todoinput.css'

const Todoinput = (props) => {
const [inputText, setInputText] = useState('');

  return (
    <div className="input-container">
        <input type="text" className='input-box-todo' placeholder='Enter task to perform'  value={inputText}
        onChange={e=>{
          setInputText(e.target.value);
        }}/>
        <button className='add-btn' onClick={()=>{
          props.addList(inputText)
          setInputText("")
        }}>+</button>
       
    </div>
  )
}

export default Todoinput