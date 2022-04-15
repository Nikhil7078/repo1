import Head from '../MyComponent/header'
import { Footer } from '../MyComponent/Footer'
import { Todos } from '../MyComponent/Todos'
import React,{ useState } from 'react';
import { AddTodo } from '../MyComponent/Addtodo';

export default function App() 
{
  const onDelete = (todo) => 
  {
    console.log("this is delete");
    settodos(todos.filter((e) =>{
      return  e !== todo;
    }))
  }
  const [todos,settodos] = useState([
    {
      son: 1,
      title: "Go to the market",
      desc: "You need to go to the market for done this job "
    },
    {
      son: 2,
      title: "Go to the gym",
      desc: "You need to go to the gym for done this job "
    },
    {
      son: 3,
      title: "Go to the mall",
      desc: "You need to go to the mall for done this job "
    }
  ]);

  return (
    <>
      <Head title="My todo list" searchbar={false} />
      <AddTodo/>
      <Todos todos={todos} onDelete={onDelete} />
      <Footer/>
    </>
  );
}
