import React from 'react'

export const Todolist = (_proms)=>
{
  return(
  <div>
  <h5 className='my-3'>{_proms.list.son}</h5> 
  <h5>{_proms.list.title}</h5> 
  <h5>{_proms.list.desc}</h5>
  <button type="button" className ="btn btn-light" onClick = { ()=>{_proms.onDelete(_proms.list)} }>Delete</button>
  </div>
  )
}

