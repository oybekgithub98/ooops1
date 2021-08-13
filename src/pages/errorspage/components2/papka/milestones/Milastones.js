import React from 'react';
import './Milestones.css';

const Milastones = () => {
    return (
        <div className="milestones">
            <div className="milestones_wrapper">
                <div className="milestones_header">
                    <div className="miles_sep">
                        <p>SEP</p>
                        <p>18</p>
                    </div>
                    <div className="miles_blog">
                        <p>Write 15 blog articles on Medium</p>
                        <p>Office/Marketing</p>
                    </div>
                </div>
                {/* progress */}
                <div className="progress">
                    <div className="progress_bar">
                        <div className="barr"></div>
                    </div>
                    <span>72%</span>
                    <p>Compete</p>
                </div>
                <hr />

                <div className="milestones_dribble">
                    <div className="miles_now">
                        <p>Nov</p>
                        <p>02</p>
                    </div>
                    <div className="miles_publish">
                        <p>Publish 20 Dribbles</p>
                        <p>Office/Marketing</p>
                    </div>
                </div>

                {/* progress */}
                <div className="progress foot">
                    <div className="progress_bar">
                        <div className="barr"></div>
                    </div>
                    <span>15%</span>
                    <p>Compete</p>
                </div>
            </div>
        </div>
    )
}

export default Milastones
