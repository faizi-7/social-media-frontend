import React, { useContext } from 'react'
import "./stories.scss"
import {AuthContext} from '../../context/authContext'



const Stories = () => {
    const {currentUser} = useContext(AuthContext);
    
    //Temporary
    const stories= [
        {
            id: 1,
            name: "Faiz Iqbal",
            img: "https://images.pexels.com/photos/7624882/pexels-photo-7624882.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        },
        {
            id: 2,
            name: "Faiz Iqbal",
            img: "https://images.pexels.com/photos/7624882/pexels-photo-7624882.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        },
        {
            id: 3,
            name: "Faiz Iqbal",
            img: "https://images.pexels.com/photos/7624882/pexels-photo-7624882.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        },
    ];
  return (
    <div className='stories'>
        <div className="story">
            <img src={currentUser.profilePic} alt=""/>
            <span>{currentUser.name}</span>
            <button>+</button>
        </div>
        {stories.map(story => {
            return (
                <div className="story" key={story.id}>
                    <img src={story.img} alt=""/>
                    <span>{story.name}</span>
                </div>
            )
        })}
    </div>
  )
}

export default Stories