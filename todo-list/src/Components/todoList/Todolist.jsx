import React from 'react'
import './todoList.css'

const todoList = (props) => {
  return (
    <div className='list-item'>
      {props.item}
          <span className='icons'>
      <i className="fa-solid fa-trash icon-delete" onClick={e=>{
        props.deleteItem(props.index)
      }}></i>
    </span>
    </div>


  )
}

export default todoList