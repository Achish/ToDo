"use client"
import React, { useState } from 'react'

const Achish = () => {
  const [task, settask] = useState("")
  const [desc, setdesc] = useState("")
  const [mainTask, setmainTask] = useState([])
  const submitHandler = (e) =>{
    e.preventDefault()
    setmainTask([...mainTask, {task,desc}]);
    settask("");
    setdesc("");
    console.log(mainTask)
  };

  const deleteHandler = (i) => {
    let copytask = [...mainTask]
    copytask.splice(i,1)
    setmainTask(copytask)
  }

  let renderTask = <h2>No Task Available</h2>;

  if(mainTask.length>0){
  renderTask = mainTask.map((t,i) => {
    return (
      <li key={i} className='flex items-center justify-between mb-8'>
        <div className='flex items-center justify-between w-2/3'>
          <h5>{t.task}</h5>
          <h6>{t.desc}</h6>
        </div>
        <button
        onClick={() => {
          deleteHandler(i)
        }}
        className='bg-red-400 color-white rounded py-2 px-3'>delete</button>
      </li>
    );
    })
  }
  return (
    <>
      <h1 className='bg-black text-white p-5 font-bold text-2xl text-center'>TODO</h1>
      <form onSubmit={submitHandler}>
        <input type="text" className='border-4 border-zinc-800 text-2xl m-8 px-4 py-2' placeholder="Enter task here"
        value={task}
        onChange={(e)=>{
          settask(e.target.value)
        }}
        />
        <input type="text" className='border-4 border-zinc-800 text-2xl m-8 px-4 py-2' placeholder="Enter description here"
        value={desc}
        onChange={(e)=>{
          setdesc(e.target.value)
        }}
        />
        <button className='bg-black text-white px-4 py-3 text-2xl font-bold rounded'>Add task</button>
        </form>
        <hr />
        <div className='p-8 bg-slate-200'>
            <ul>
              {renderTask}
            </ul>
        </div>
        
    </>
  )
}

export default Achish
