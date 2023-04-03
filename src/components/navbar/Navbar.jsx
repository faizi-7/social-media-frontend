import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import './navbar.scss'
import myLogo from '../../assets/images/Logo.png'
import HomeIcon from '@mui/icons-material/Home';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import WindowIcon from '@mui/icons-material/Window';
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import EmailIcon from '@mui/icons-material/Email';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { DarkModeContext } from '../../context/darkModeContext';
import { AuthContext } from '../../context/authContext';

const Navbar = () => {
  const {toggle, darkMode} = useContext(DarkModeContext);
  const { currentUser } = useContext(AuthContext);

  return (
    <div className='navbar'>

      <div className="left">
        <Link to="/">
          <img src={myLogo}/>
        </Link>
        <HomeIcon style={{ color: '#1363DF' }}/>
        {darkMode ? <div onClick={toggle}><DarkModeIcon style={{ color: '#F7C04A' }}/></div> : <div onClick={toggle}><LightModeIcon style={{ color: '#F7C04A' }}/></div>}
        
        <WindowIcon style={{ color: '#1363DF' }}/>
        <div className="search">
          <div className="search-icon">
            <SearchIcon/>
          </div>
          <input type="text" placeholder='Search..'/>

        </div>
      </div>

      <div className="right">
        <PersonIcon style={{ color: '#1363DF' }}/>
        <EmailIcon style={{ color: '#1363DF' }}/>
        <NotificationsIcon style={{ color: '#1363DF' }}/>
        <div className="user">
          <img src={currentUser.profilePic}/>
          <span>{currentUser.name}</span>
        </div>

      </div>
    </div>
  )
}

export default Navbar