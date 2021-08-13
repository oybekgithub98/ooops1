import React, { useState } from 'react';
import './MessageSender.css';
import { FiX, FiPaperclip, FiFile, FiAlignRight, FiAlignLeft, FiAlignCenter} from 'react-icons/fi';

const PopularWidget = () => {
    const [alignment, setAlignment] = useState({alignment: "right", icon: <FiAlignRight/>, style: {textAlign: "right"}});

    const handleTextAreaAlignment = (e) => {
        setAlignment(!alignment);
        if(alignment.alignment === "right"){
            setAlignment({alignment: "left", icon: <FiAlignLeft/>, style: {textAlign: "left"}});
        }
        else if(alignment.alignment === "left"){
            setAlignment({alignment: "center", icon: <FiAlignCenter/>, style: {textAlign: "center"}});
        }
        else{
            setAlignment({alignment: "right", icon: <FiAlignRight/>, style: {textAlign: "right"}});
        }
    } 
    return (
        <div className="messageSender">
            <div className="messageSender__top">
                <p className="messageSender__title">Start debuging with us</p>
                <FiX/>
            </div>
            <div className="messageSender__contact">
                <p>johndoe@gmail.com</p>
            </div>
            <div className="messageSender__message">
                <textarea style={alignment.style} className="message" placeholder="What did you do..."></textarea>
                <div className="messageOptions">
                    <div className="sendfile__option">
                        <FiPaperclip/>
                        <input type="file" />
                    </div>
                    <div className="sendfile__option">
                        <FiFile/>
                        <input type="file" />
                    </div>
                    <div className="text__alignment" onClick={handleTextAreaAlignment}>
                        {alignment.icon}
                    </div>
                </div>
            </div>
            <button className="message__send">Send what you did</button>
        </div>
    )
}

export default PopularWidget
