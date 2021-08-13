import React from 'react';
import './InterfaceProject.css';
import { GiAlarmClock } from 'react-icons/gi';
import { VscListOrdered } from 'react-icons/vsc';
import { FiMoreHorizontal } from 'react-icons/fi';
import { BsChat } from 'react-icons/bs';

const InterfaceProject = () => {
    return (
        <div className="interface">
            <div className="interface_wrapper">
                <div className="interLeft">
                    <div className="raundet">
                    </div>
                </div>
                <div className="interRight">
                    <div className="header_right">
                        <h3>Search inspiration for upcoming project</h3>
                        <div className="interRightItem">
                            <div className="clock_reminder">
                                <GiAlarmClock style={{ fontSize: "20px" }} />
                                <p>Reminder</p>
                            </div>
                            <div className="priority_reminder">
                                <VscListOrdered style={{ fontSize: "20px" }} />
                                <p>Priority</p>
                            </div>
                            <div className="horizontalIcon">
                                <FiMoreHorizontal style={{ fontSize: "20px" }} />
                            </div>
                        </div>
                    </div>
                    <div className="body_right">
                        <p>There is so much great inspiration in this world 😁</p>
                    </div>
                    <div className="profile_right">
                        <div className="profile1">
                            <div className="image">
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRd8DKTlUR4jYSVuJ0hsN_3JaZI_64acrEMLw&usqp=CAU" alt="" />
                            </div>
                            <div className="clock">
                                <GiAlarmClock style={{ fontSize: "20px" }} />
                                <p>02:42:12</p>
                            </div>
                        </div>
                        <div className="profile2">
                            <div className="new_clent">
                                <p>New client</p>
                                <span>X</span>
                            </div>
                            <div className="progress_bar">
                                <div className="progress_item">
                                    {/* <div className="progress_bar"> */}
                                        <div className="barr"></div>
                                    {/* </div> */}
                                </div>
                            </div>
                            <div className="comlete">
                                <span>60%</span>
                                <p>Complete</p>
                            </div>
                            <div className="comments">
                                <span>3</span>
                                <p>comments</p>
                                <BsChat style={{ fontSize: "14px" }} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default InterfaceProject
