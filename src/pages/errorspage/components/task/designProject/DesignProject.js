import React from 'react';
import './DesignProject.css';
import { GiAlarmClock } from 'react-icons/gi';
import { FiMoreHorizontal } from 'react-icons/fi';
import SubTask from './designProjectItem/subTask/SubTask';
import CreateTask from './designProjectItem/createTask/CreateTask';

const DesignProject = () => {
    return (
        <div className="designProject">
            <div className="designProject_wrapper">
                <div className="design_left">
                    <div className="raundet">
                    </div>
                </div>
                <div className="design_right">
                    <div className="header_right">
                        <h3>Create design for the first round</h3>
                        <div className="interRightItem">
                            <div className="clock_reminder">
                                <p>Important</p>
                            </div>
                            <div className="priority_reminder">
                                <GiAlarmClock style={{fontSize: "20px"}} />
                                <p>Reminder</p>
                            </div>
                            <div className="horizontalIcon">
                                <FiMoreHorizontal style={{fontSize: "20px"}} />
                            </div>
                        </div>
                    </div>
                    <div className="body_right">
                        <p>Project are about modern tech, so keep it minimalestic</p>
                    </div>
                    
                    <SubTask />
                    <CreateTask />
                </div>
            </div>
        </div>
    )
}

export default DesignProject
