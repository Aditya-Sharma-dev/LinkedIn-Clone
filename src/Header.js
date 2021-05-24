import React from 'react'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search';
import HeaderOption from './HeaderOption';
import HomeIcon from '@material-ui/icons/Home';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import ChatIcon from '@material-ui/icons/Chat';
import NotificationsIcon from '@material-ui/icons/Notifications';


function Header() {
    return (
        
            <div className='header'>
                <div className="header_left">
                    <img src="https://image.flaticon.com/icons/png/512/174/174857.png" alt="" />
                    <div className="header_search">
                    <SearchIcon/>
                    <input type="text" />
                    </div>
                </div>

                <div className="header_right">
                    <HeaderOption Icon ={HomeIcon} title='Home'/>
                    <HeaderOption Icon={SupervisorAccountIcon} title='My Network'/>
                    <HeaderOption Icon={BusinessCenterIcon} title='Jobs'/>
                    <HeaderOption Icon={ChatIcon} title='Chat'/>
                    <HeaderOption Icon={NotificationsIcon} title='Notification'/>
                    <HeaderOption avatar='https://scx1.b-cdn.net/csz/news/800a/2015/alberteinste.jpg' title='Me'/>

                </div>
            </div>
        
    )
}

export default Header
