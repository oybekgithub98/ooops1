import React from 'react';
import './ErrorHeader.css';
import { FiSettings } from 'react-icons/fi';

const ErrorHeader = () => {
    return (
        <div className="errors_header">
            <div className="errors_wrapper">
                <div className="header">
                    <h3>My work</h3>
                    <div className="addTask">
                        <div className="addTaskItem">
                            <button>Add task</button>
                            <select>
                                <option value=""></option>
                                <option value=""></option>
                                <option value=""></option>
                            </select>
                        </div>
                        <div className="addTask_icons">
                            <FiSettings />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ErrorHeader
