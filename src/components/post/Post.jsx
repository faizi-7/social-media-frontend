import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import "./post.scss"
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ChatBubbleOutlineIcon from '@mui/icons-material/ModeComment';
import SendIcon from '@mui/icons-material/Send';
import Comments from '../comments/Comments'

const Post = ({post}) => {
  const [commentOpen, setCommentOpen]= useState(false);
  const liked = true;
  return (
    <div className='post'>
      <div className="container">

          <div className="user">
            <div className="profileInfo">
              <img src={post.profilePic}/>
              <div className="otherInfo">
                <Link to={`/profile/${post.userId}`} style= {{textDecoration: "none", color: "inherit"}}>
                  <span>{post.name}</span>
                </Link>
                <p className='date'>1 min ago</p>
              </div>
            </div>
            <div className="moreButton">
              <MoreHorizIcon/>
            </div>
          </div>

          <div className="content">
            <p>{post.desc}</p>
            <img src={post.img}/>
          </div>

          <div className="info">
            <div className="item">
              {liked? <FavoriteIcon style={{color: "rgb(243, 59, 59)"}}/>: <FavoriteBorderIcon/>}
              <span>12 Likes</span>
            </div>
            <div className="item" onClick={()=> setCommentOpen(!commentOpen)}>
              <ChatBubbleOutlineIcon/>
              <span>10 Comments</span>
            </div>
            <div className="item">
              <SendIcon/>
              <span>Share</span>
            </div>
          </div>

          {commentOpen && <Comments/>}

      </div>
    </div>
  )
}

export default Post