import React, { useContext } from 'react'
import './comments.scss'
import {AuthContext} from '../../context/authContext'

const Comments = () => {
    const {currentUser}= useContext(AuthContext);
    const comments = [
        {
            id: 1,
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed faucibus lectus in massa feugiat, vel aliquam sapien elementum. Sed et nisl vel augue consequat consequat. ",
            name: "Humaira Quasiri",
            userId: 1,
            profilePicture: "https://images.pexels.com/photos/7624882/pexels-photo-7624882.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        },
        {
            id: 2,
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed faucibus lectus in massa feugiat, vel aliquam sapien elementum. Sed et nisl vel augue consequat consequat. ",
            name: "Aftab Ahmad",
            userId: 2,
            profilePicture: "https://images.pexels.com/photos/7624882/pexels-photo-7624882.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        },
    ];
    return (
    <div className="comments">
        <div className="write">
            <img src={currentUser.profilePic} alt="" />
            <input type="text" placeholder='write a comment..'/>
            <button>Submit</button>
        </div>
        {comments.map(comment=> {
            return (
                <div className="comment">
                    <img src={comment.profilePicture} alt="" />
                    <div className="info">
                        <span>{comment.name}</span>
                        <p>{comment.desc}</p>
                    </div>
                    <span className='date'>1 hour ago</span>
                </div>
            );
        })}
    </div>
    )
}

export default Comments