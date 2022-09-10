import React from 'react'
import {ReactComponent as Home} from "../images/home.svg"
import {ReactComponent as Messages} from "../images/messages.svg"
import {ReactComponent as Post} from "../images/post.svg"
import {ReactComponent as Explore} from "../images/explore.svg"
import {ReactComponent as Activity} from "../images/activity.svg"

import '../styles/menu.scss'

function Menu() {
  return (
    <div className='menu'>
        <Home className='icon' />
        <Messages className='icon' />
        <Post className='icon' />
        <Explore className='icon' />
        <Activity className='icon' />
        {/* profile icon component */}
    </div>
  )
}

export default Menu