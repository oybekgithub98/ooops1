import React from 'react';
import ErrorHeader from './components/errorHeader/ErrorHeader';
import PersonalTask from './components/personalTask/PersonalTask';
import Tasks from './components/task/Tasks';
import ErrorRight from './components2/erreorRight/ErrorRight';
import './Errors.css';

const Errors = () => {

    return (
        <div className="errors">
            <ErrorHeader />
            <div className="errorwrapper">
                <div className="errorwrapper_item1">
                    <PersonalTask />
                    <Tasks />
                </div>
                <div className="errorwrapper_item2">
                    <ErrorRight />
                </div>
            </div>
        </div>
    )
}

export default Errors
