import React from 'react' 
import {Todolist} from '../MyComponent/Todolist'
export const Todos = (props) =>
{
  return(
    <div className = "container">
        <h3 className='text-center my-3' >Todos List</h3>
        {/* <h3>We are in Todos</h3> */}
        {
         props.todos.map((todo) =>{
           return(
           <>
           <Todolist list = {todo} onDelete = {props.onDelete}/>
           {/* <h6>this is loop</h6> */}
           </>
           )
         })
        }    
   </div>
  )
}
