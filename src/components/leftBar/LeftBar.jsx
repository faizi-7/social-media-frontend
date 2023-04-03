import React, { useContext } from 'react'
import './leftBar.scss'
import PeopleIcon from '@mui/icons-material/People';
import GroupsIcon from '@mui/icons-material/Groups';
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';
import MovieIcon from '@mui/icons-material/Movie';
import FavoriteIcon from '@mui/icons-material/Favorite';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import CameraIcon from '@mui/icons-material/Camera';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import MessageIcon from '@mui/icons-material/Message';
import PaidIcon from '@mui/icons-material/Paid';
import BookIcon from '@mui/icons-material/Book';
import PlayLessonIcon from '@mui/icons-material/PlayLesson';
import { AuthContext } from '../../context/authContext';

const LeftBar = () => {
  const {currentUser} = useContext(AuthContext);
  return (
    <div className="leftBar">
      <div className="container">
        <div className="menu">
          <div className="user">
            <img src={currentUser.profilePic}/>
            <span>{currentUser.name}</span>
          </div>
          <div className="item">
            <div className="iconbox">
              <PeopleIcon style={{ color: '#1363DF' }}/>
            </div>
            <span>Friends</span>
          </div>
          <div className="item">
            <div className="iconbox">
              <GroupsIcon style={{ color: '#1363DF' }}/>
            </div>
            <span>Groups</span>
          </div>
          <div className="item">
            <div className="iconbox">
              <LocalGroceryStoreIcon style={{ color: '#1363DF' }}/>
            </div>
            <span>Marketplace</span>
          </div>
          <div className="item">
            <div className="iconbox">
              <MovieIcon style={{ color: '#1363DF' }}/>
            </div>
            <span>Watch</span>
          </div>
          <div className="item">
            <div className="iconbox">
              <FavoriteIcon style={{ color: '#1363DF' }}/>
            </div>
            <span>Memories</span>
          </div>
        </div>

        <hr/>

        <div className="menu">
          <span className='titleName'>Your Shortcuts</span>
          <div className="itemShortcuts">
            <div className="iconbox">
              <EventAvailableIcon style={{ color: '#C58940' }}/>
            </div>
            <span>Events</span>
          </div>
          <div className="itemShortcuts">
            <div className="iconbox">
              <SportsEsportsIcon style={{ color: '#C58940' }}/>
            </div>
            <span>Gaming</span>
          </div>
          <div className="itemShortcuts">
            <div className="iconbox">
              <CameraIcon style={{ color: '#C58940' }}/>
            </div>
            <span>Gallary</span>
          </div>
          <div className="itemShortcuts">
            <div className="iconbox">
              <PlayCircleIcon style={{ color: '#C58940' }}/>
            </div>
            <span>Videos</span>
          </div>
          <div className="itemShortcuts">
            <div className="iconbox">
              <MessageIcon style={{ color: '#C58940' }}/>
            </div>
            <span>Messages</span>
          </div>
        </div>

        <hr/>

        <div className="menu">
          <span className='titleName'>Others</span>
          <div className="itemOthers">
            <div className="iconbox">
              <PaidIcon style={{ color: '#EB455F' }}/>
            </div>
            <span>Fundraiser</span>
          </div>
          <div className="itemOthers">
            <div className="iconbox">
              <BookIcon style={{ color: '#EB455F' }}/>
            </div>
            <span>Tutorials</span>
          </div>
          <div className="itemOthers">
            <div className="iconbox">
              <PlayLessonIcon style={{ color: '#EB455F' }}/>
            </div>
            <span>Course</span>
          </div>
        </div>


      </div>
    </div>
  )
}

export default LeftBar