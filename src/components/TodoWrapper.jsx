import AddTask from './AddTask';
import UpdateForm from './UpdateForm';
import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import TaskItem from "./TaskItem";
uuidv4();

//react-toastify used when input field is empty and display the toast
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  // Create Tasks 
  const [todos, setTodos] = useState([]);

  // temp state
  const [updateData, setUpdateData] = useState('');
  
  //Add Todo task when clicking the the "+" icon or add button
  const addTodo = (todo) => {
    if(todo.trim() !== '') {
      setTodos([
        ...todos,
        { id: uuidv4(), task: todo, completed: false, isEditing: false },
      ]);
    } else {
      // Show notification if task input is empty
      toast.error('Please input a task first',
      { autoClose: 2000,});
    }
  };

  //Delete task
  const deleteTask = (id) => {
    let newTasks = todos.filter( task => task.id !== id)
    setTodos(newTasks);
  }
  
  //Mark Complete task
  const onComplete = (id) => {
    let complete = todos.map((list) => {
      if(list.id === id) {
        return ({...list, completed :  !list.completed})
      }
      return list
    })
    setTodos(complete)
  }

  // Cancel update
  const cancelUpdate = () => {
    setUpdateData('');
    console.log("test")
  }

  //Change task when changing the task what have input in inout field or chamging the updated state
  const changeTask = (e) => {
    let newEntry = {
      id: updateData.id,
      task: e.target.value,
      completed: updateData.completed ? true : false
    }
    setUpdateData(newEntry);
  }

  //Update task, after clicking the update button
  const updateTask = () => {
    if(updateData.task === '') {
      toast.error('Please input your updated task first', {autoClose: 2000});   
      return ;
    }
    const filterRecords = [...todos].filter( task => task.id !== updateData.id );
    let updatedObject = [...filterRecords, updateData]
    setTodos(updatedObject);
    setUpdateData('');
  }
  return (
    <main className="relative m-10 flex flex-col min-h-screen">
      <div className="items-center flex flex-col gap-[10px] m-10">
        <div className="p-2 -mb-2 w-[40%] responsive">
          <h1 className="font-poppins opacity-70 font-extrabold text-[25px]">TODO APP</h1>
          <ToastContainer className="bg-transparent"/>
        </div>            
        {updateData && updateData ? (
        <div className="w-[40%] p-1 rounded-lg bg-white shadow-md responsive">
          <UpdateForm 
            updateData={updateData}
            changeTask={changeTask}
            updateTask={updateTask}
            cancelUpdate={cancelUpdate}
          />
        </div>
        ) : (
        <div className="w-[40%] p-1 rounded-lg bg-white shadow-md responsive">
          <AddTask addTodo={addTodo}/>
        </div>
        )}
        <div className="w-[40%] p-4 bg-white rounded-xl shadow-md max-sm:w-[90%] responsive relative">
          {todos && todos.length ? '' : 
          <p className='font-medium text-xl text-slate-500 text-center my-2 bg-transparent'>No tasks...</p>}
          {todos.map((todo, index) => (
            <TaskItem task={todo} key={index} deleteTask={deleteTask} onComplete={onComplete} setUpdateData={setUpdateData}/>
          ))}
        </div>
      </div>
    </main>
  )
}

export default App