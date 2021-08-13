import React, {useState} from 'react';
import './PersonalTask.css';
import { RiArrowRightSLine, RiArrowDownSLine } from 'react-icons/ri';
import { BsFillLockFill, BsFillUnlockFill } from 'react-icons/bs'; 
import PersonalItemTask from './personalItem/PersonalItemTask';


const PersonalTask = () => {

    const [taskAdd, setTaskAdd] = useState(false);

    const handTasks = (e) => {
        const tasks_wrap = document.querySelector('.tasks_wrap');
        
        if (!taskAdd) {
            tasks_wrap.classList.add('activeTasks');
            setTaskAdd(true);
        } else {
            tasks_wrap.classList.remove('activeTasks');
            setTaskAdd(false);
        }
    }

    return (
        <div className="personal_task">
            <div className="personal_task_wrapper">
                <div className="tasks">
                    <div className="task_icons">
                        { ! taskAdd ? <RiArrowRightSLine onClick={handTasks} style={{fontSize: "20px"}} /> : <RiArrowDownSLine onClick={handTasks} style={{fontSize: "20px"}} /> }    
                    </div> 
                    <div className="task_icons">
                        { ! taskAdd ? <BsFillLockFill onClick={handTasks} /> : <BsFillUnlockFill onClick={handTasks} /> }
                    </div> 
                    <p onClick={handTasks}>Personal tasks</p>
                    <div className="hr"></div>
                </div>
                <div className="tasks_wrap">
                    <PersonalItemTask />
                </div>
            </div>
        </div>
    )
}

export default PersonalTask
