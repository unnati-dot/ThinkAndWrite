import React from 'react'
import trash from "../image/trash.png"
import pencil from "../image/pencil.png"
import { Link } from 'react-router-dom'
import Menu from '../components/Menu'

const Single = () => {
  return (
    <div className='single'>
      <div className='content'>
        <img src="https://images.pexels.com/photos/9585588/pexels-photo-9585588.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"/>
        <div className='user'>
        <img src="https://images.pexels.com/photos/16179987/pexels-photo-16179987/free-photo-of-analog-vibes.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"/>
        <div className='info'>
        <span>John</span>
        <p>Posted 2 days ago</p>
        </div>
        <div className='edit'>
        <Link to={`/write?edit=2`}>
        <img src={pencil} alt=""/>
        </Link>
       
        <img src={trash} alt=""/>
       
        </div>
        </div>
        <h1>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s </h1>
        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. 
          The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. 
          Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
      </div>
     <Menu/>
    </div>
  )
}

export default Single
