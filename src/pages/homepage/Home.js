import React from 'react';
import './Home.css';
import { AiOutlineBug } from 'react-icons/ai';
import { overViewData } from '../../data/overview/OVERVIEW_DATA';
import Widgets from '../../components/widget-collection/Widgets';
import OverviewItem from '../../components/overview-item/OverviewItem';

const Home = () => {
    return (
        <div className="home">
            <div className="home__container">
                <div className="home__titleContainer">
                    <h1 className="home__title">What kind of Bugs are popular today?</h1>
                    <button className="home__acceptBugs">Send your bugs <AiOutlineBug /></button>
                </div>
                <div className="home__utils">
                    <div className="overviewErrors__container">
                        {
                            overViewData?.map((overviewItem) => (
                                <OverviewItem 
                                    // key={overviewItem?.id}
                                    id={overviewItem?.id}
                                    image={overviewItem?.techImage}
                                    techName={overviewItem?.techName}
                                    errorType={overviewItem?.errorType}
                                    errorFrequency={overviewItem?.errorFrequency}
                                    errorStatus={overviewItem?.errorStatus}
                                />
                            ))
                        }
                    </div>
                    <Widgets />
                </div>
            </div>
        </div>
    )
}

export default Home
