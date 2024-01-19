//react-toastify used when input field is empty and display the toast
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

//fontawesome used for CRUD interpretation icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck, faCircleXmark } from '@fortawesome/free-solid-svg-icons';

//Material Tailwind Tooltip for identifying what buttons used or the name itself when cusor focus
import { Tooltip} from "@material-tailwind/react";

const UpdateForm = ({updateData, changeTask, updateTask, cancelUpdate }) => {
  return(
    <div className='flex bg-transparent'>
      <div className="flex bg-white rounded-md items-center w-full">
        <ToastContainer className='bg-transparent'/>
        <input type="text" value={updateData.task} onChange={(e) => changeTask(e)}  placeholder='Update your task' className="font-poppins bg-transparent font-medium text-xl py-2 px-2 focus:outline-none w-full border-2 rounded-lg"/>
        <div className='flex gap-3 px-4 bg-transparent'>
          <Tooltip content="Update" className="tooltip">
            <FontAwesomeIcon icon={faCircleCheck} size='xl' style={{color: "22c55e", background: "transparent"}} onClick={updateTask}/>
          </Tooltip>
          <Tooltip content="Cancel" placement="bottom" className="tooltip">
            <FontAwesomeIcon icon={faCircleXmark} size='xl' style={{color: "ef4444", background: "transparent"}} onClick={cancelUpdate}/>
          </Tooltip>
        </div>
      </div>
    </div>
  )
}

export default UpdateForm;