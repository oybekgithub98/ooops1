import React, { useState } from 'react';
import './OverviewItem.css';
import { AiOutlineMore } from 'react-icons/ai';
import { FiHeart, FiLink, } from 'react-icons/fi'
const OverviewItem = ({id,image, techName, errorType, errorFrequency, errorStatus}) => {
    let fetchedLikes = 40;
    const [like, setLikes] = useState(fetchedLikes);
    const handleOverviewItemLike = (e) => {
        if(fetchedLikes === like){
            setLikes(previousLike => previousLike + 1);
        }
        else if(fetchedLikes === like + 1){
            setLikes(like)
        }
    }
    return (
        <div key={id} className="overviewItem">
            <div className="overviewItem__top">
                <div className="overviewItem__image">
                    <img src={image} alt="" />
                </div>
                <div className="overviewItem__options">
                    <div className="option__wrapper">
                        <div className="overviewItem__back" onClick={handleOverviewItemLike}>
                            <FiHeart style={fetchedLikes < like ? {fill: "red", stroke: "red"} : ""}/>
                        </div>
                        <p>{like}</p>
                    </div>
                    <div className="overviewItem__back">
                        <FiLink/>
                    </div>
                    <div className="overviewItem__back">
                        <AiOutlineMore/>
                    </div>
                </div>
            </div>
            <div className="overviewItem__main">
                <p className="overviewItem__name">{techName}</p>
                <p className="overviewItem__description">{errorType}</p>
                <div className="overviewItem__active">
                    <p className="active__item">Bug Status: </p> <p className="bug__count">{errorFrequency}</p>
                </div>
                <button className="overviewItem__more">More</button>
            </div>
        </div>
    )
}

export default OverviewItem;