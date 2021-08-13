import React from 'react';
import './TaskItem.css';
import { RiAddFill } from 'react-icons/ri';

const TaskItem = () => {
    return (
        <div className="taskItem">
            <div className="taskItem_wrapper">
                <div className="tasks_item">
                    <h4>User Interface Projects</h4>
                    <div className="item_image">
                        <div className="item_imageImg">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJIqww3xLcjjps5KLPgxMrdLczLK68T3Mk2w&usqp=CAU" alt="" />
                        </div>
                        <div className="item_imageImg">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJIqww3xLcjjps5KLPgxMrdLczLK68T3Mk2w&usqp=CAU" alt="" />
                        </div>
                        <div className="item_imageImg">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJIqww3xLcjjps5KLPgxMrdLczLK68T3Mk2w&usqp=CAU" alt="" />
                        </div>
                        <div className="addfill">
                            <RiAddFill style={{ fontSize: "18px" }} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TaskItem
