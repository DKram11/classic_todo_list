import React from 'react'

//fontawesome used for CRUD interpretation icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
 
const TaskItem = ({task, deleteTask, onComplete, setUpdateData}) => {

  return (
    <div className='flex justify-between items-center my-2 mx-2 py-3 px-4 rounded-lg border-2 overflow-auto'>
      <p className='font-medium text-xl text-slate-600' id={task.completed ? 'completed' : ''}>{task.task}</p>
      <div className='flex gap-4 ml-4'>
        <FontAwesomeIcon icon={faCheck} size="xl" className='hover-icon' onClick={() => onComplete(task.id)} id={task.completed ? 'completed' : ''} />
        <FontAwesomeIcon 
          icon={faPenToSquare} size='xl' className='hover-icon'  
          onClick={ () => setUpdateData({ 
            id: task.id, 
            task: task.task, 
            completed: task.completed ? true : false
          }) }/>
        <FontAwesomeIcon icon={faTrash} size='xl' className='hover-icon' onClick={() => deleteTask(task.id)}/>
      </div>
    </div>
  )
}

export default TaskItem