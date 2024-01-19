import { useState } from "react"
import { plusIcon } from "../assets/icons"

const AddTask = ({addTodo}) => {
  const [value, setValue] = useState('');
  const handleSubmit = e => {
    e.preventDefault();
    addTodo(value)
    setValue('');
  }
  return (
  <div className="flex bg-white border-2 rounded-md items-center">
    <form onSubmit={handleSubmit} className="flex w-full bg-transparent">
      <input type="text" value={value} placeholder="Add Task" onChange={(e)=> setValue(e.target.value)} className="font-poppins bg-white font-medium text-xl w-full py-2 px-2 focus:outline-none rounded-lg"/>
        <button className="border-2 border-slate-300 bg-slate-300">  
          <img
          src={plusIcon} 
          alt="add task"
          className="bg-white opacity-50"/>
        </button>
    </form>
  </div>   
  )
}

export default AddTask