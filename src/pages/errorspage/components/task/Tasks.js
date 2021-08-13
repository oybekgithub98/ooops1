import React, { useState } from 'react';
import { RiArrowRightSLine, RiArrowDownSLine} from 'react-icons/ri';
import { BsListUl, BsListTask } from 'react-icons/bs';
import './Tasks.css';
import TaskItem from './taskItem/TaskItem';
import InterfaceProject from './interfaceProject/InterfaceProject';
import DesignProject from './designProject/DesignProject';

const Tasks = () => {
    const [taskhand1, setTaskHand1] = useState(false);
    const [taskhand2, setTaskHand2] = useState(false);

    const hadnleTask1 = (e) => {
        const tasks_search = document.querySelector('.tasks_search');

        if(!taskhand1) {
            tasks_search.classList.add('activetasks_search')
            setTaskHand1(true);
        } else {
            tasks_search.classList.remove('activetasks_search')
            setTaskHand1(false);
        }
    }

    const hadnleTask2 = (e) => {
        const list_tasks_item = document.querySelector('.list_tasks_item');

        if(!taskhand2) {
            list_tasks_item.classList.add('activelist_tasks_item')
            setTaskHand2(true);
        } else {
            list_tasks_item.classList.remove('activelist_tasks_item')
            setTaskHand2(false);
        }
    }

    return (
        <div className="tasks_id">
            <div className="tasks_wrapper">
                <div className="projects">
                    <div className="project_tasks">
                    {!taskhand1 ?<RiArrowRightSLine onClick={hadnleTask1} style={{ fontSize: "20px", cursor: "pointer"}} /> : <RiArrowDownSLine onClick={hadnleTask1} style={{ fontSize: "20px", cursor: "pointer" }} />}
                        <p onClick={hadnleTask1}>Tasks</p>
                    </div>
                    <div className="hr"></div>
                    <div className="list_tasks" onClick={hadnleTask2}>
                        <BsListUl style={{ fontSize: "18px" }} />
                        <p>List</p>
                        {!taskhand2 ?<RiArrowRightSLine style={{ fontSize: "20px" }} /> : <RiArrowDownSLine style={{ fontSize: "20px" }} />}
                    </div>
                    <div className="data_tasks">
                        <BsListTask style={{ fontSize: "18px" }} />
                        <p>Starting data(desc)</p>
                    </div>
                </div>
                <div className="list_tasks_item">
                    <TaskItem />
                </div>
                <div className="tasks_search">
                    <InterfaceProject />
                    <DesignProject />

                </div>
            </div>
        </div>
    )
}

export default Tasks
