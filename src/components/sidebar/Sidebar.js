import React from 'react';
import './Sidebar.css';
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { BiCrown } from 'react-icons/bi';

const Sidebar = ({ SIDEBAR_UI_DATA }) => {
    return (
        <div className="sidebar">
            <div className="sidebar__container">
                <Link to="/">
                    <div className="sidebar__logo">
                        <span className="logo">OOOPS</span>
                    </div>
                </Link>
                <div className="sidebar__collection">
                    {
                        SIDEBAR_UI_DATA.map((sidebarItem) => (
                            <NavLink
                                key={sidebarItem?.id}
                                exact activeClassName="active__sidebarLink" to={`${sidebarItem?.route}`} className="sidebar__collectionLink"
                            >
                                <div className="sidebar__collectionItem">

                                    {sidebarItem?.sidebarIcon}
                                    <p>{sidebarItem?.sidebarTitle}</p>
                                </div>
                            </NavLink>
                        ))
                    }
                </div>
                <div className="sidebar__avatarContainer">
                    <div className="sidebar__avatar" style={{ backgroundImage: `url(https://static.vecteezy.com/system/resources/thumbnails/002/002/403/small_2x/man-with-beard-avatar-character-isolated-icon-free-vector.jpg)` }}></div>
                    <span>sdkjhjasdhkj asdjhkasjdkh</span>
                    <div className="sidebar__premium">
                        <BiCrown /> <p className="sidebar__avatarPremium">Premium</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sidebar
