import React from 'react';
import './SidebarChat.css';
import { CgProfile } from 'react-icons/cg';

function SidebarChat() {
  return (
    <div className='sidebarChat'>
        <CgProfile />
        <div className='sidebarChat__info'>
            <h2>Room name</h2>
            <p>This is the last message</p>
        </div>
    </div>
  )
}

export default SidebarChat