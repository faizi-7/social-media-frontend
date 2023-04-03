import React from 'react'
import Post from '../post/Post';
import './posts.scss'

const Posts = () => {
  const posts = [
    {
      id: 1,
      name: "Faiz Iqbal",
      userId: 1,
      profilePic: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      desc: "Lorem Ipsum dolor sit amet consectetur adipicising elit jsksi",
      img: "https://images.pexels.com/photos/2676587/pexels-photo-2676587.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 2,
      name: "Faiz Iqbal",
      userId: 1,
      profilePic: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      desc: "Lorem Ipsum dolor sit amet consectetur adipicising elit jsksi Lorem Ipsum dolor sit amet consectetur adipicising elit jsksi",
    },
  ];
  return (
    <div className='posts'>
      {posts.map(post => {
        return <Post post= {post} key= {post.id}/>
      })}
    </div>
  )
}

export default Posts
