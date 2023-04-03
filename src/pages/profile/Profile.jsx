import "./profile.scss"
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LanguageIcon from '@mui/icons-material/Language';
import EmailIcon from '@mui/icons-material/Email';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Posts from '../../components/posts/Posts'

const Profile = () => {
  return (
    <div className="profile">
      <div className="images">
        <img src="https://images.pexels.com/photos/3635300/pexels-photo-3635300.jpeg" alt="" className="cover"/>
        <img src="https://images.pexels.com/photos/1091659/pexels-photo-1091659.jpeg?auto=compress&cs=tinysrgb&w=500&h=500&dpr=1" alt="" className="profilePic"/>
      </div>
      <div className="profileContainer">
        <div className="uInfo">
          <div className="left">
            <a href="www.facebook.com">
              <InstagramIcon fontSize="large"/>
            </a>
            <a href="www.facebook.com">
              <FacebookIcon fontSize="large"/>
            </a>
            <a href="www.facebook.com">
              <TwitterIcon fontSize="large"/>
            </a>
          </div>
          <div className="center">
            <span>Aiman Sheikh</span>
            <div className="info">
              <div className="item">
                <LocationOnIcon/>
                <span>USA</span>
              </div>
              <div className="item">
                <LanguageIcon/>
                <span>ifaiz.netlify.app</span>
              </div>
            </div>
            <button>Follow</button>
          </div>
          <div className="right">
            <EmailIcon/>
            <MoreVertIcon/>
          </div>
        </div>
        <Posts/>
      </div>
    </div>
  )
}

export default Profile