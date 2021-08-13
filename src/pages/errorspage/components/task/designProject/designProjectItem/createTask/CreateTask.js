import React from 'react';
import './CreateTask.css';
import { FiMoreHorizontal } from 'react-icons/fi';
import { GiAlarmClock } from 'react-icons/gi';
import { BsChat } from 'react-icons/bs';
import { Link } from 'react-router-dom';

const CreateTask = () => {
    return (
        <div className="sub_task">
            <h3>Sub Trask</h3>
            <div className="sub_task_wrapper">
                <div className="sub_left">
                    <div className="raundet">
                    </div>
                </div>
                <div className="sub_right">
                    <div className="header_right">
                        <h4>Drav rough sketches <Link>show iess</Link></h4>
                        <div className="sub_horizontal">
                            <FiMoreHorizontal style={{ fontSize: "20px" }} />
                        </div>
                    </div>
                    <div className="body_right">
                        <p>Prepare first concepts of this project (two versions needed)</p>
                    </div>

                    <div className="drav_comment">
                        <div className="DcommentLeft">
                            <div className="drav_image">
                                <div className="img_item">
                                    <img src="	https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJIqww3xLcjjps5KLPgxMrdLczLK68T3Mk2w&usqp=CAU" alt="" />
                                </div>
                                <div className="img_item">
                                    <img src="	https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJIqww3xLcjjps5KLPgxMrdLczLK68T3Mk2w&usqp=CAU" alt="" />
                                </div>
                                <div className="img_item">
                                    <img src="	https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJIqww3xLcjjps5KLPgxMrdLczLK68T3Mk2w&usqp=CAU" alt="" />
                                </div>
                            </div>
                            <div className="drav_clock">
                                <GiAlarmClock style={{ fontSize: "20px" }} />
                                <span>05:12:48</span>
                            </div>
                        </div>
                        <div className="DcommentRight">
                            <div className="prog_bar">
                                <div className="prog">
                                    <div className="bar">
                                    </div>
                                </div>
                            </div>
                            <div className="complete">
                                <span>25%</span>
                                <p>complete</p>
                            </div>
                            <div className="comment">
                                <span>1</span>
                                <p>comment</p>
                                <BsChat />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CreateTask
