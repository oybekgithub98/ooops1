import React from 'react';
// import Mettings from '../papka/mettings/Mettings';
import Milastones from '../papka/milestones/Milastones';
import './ErrorRight.css';

const ErrorRight = () => {
    return (
        <div className="error_right">
            <h3>Milestones</h3>
            <Milastones />
            {/* <Mettings /> */}
        </div>
    )
}

export default ErrorRight
