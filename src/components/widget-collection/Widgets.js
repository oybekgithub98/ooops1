import React from 'react';
import PopularWidget from '../popular/MessageSender';
import './Widgets.css';

const Widgets = () => {
    return (
        <div className="widgets">
            <div className="popular__widgets">
                <PopularWidget/>
            </div>
        </div>
    )
}

export default Widgets
