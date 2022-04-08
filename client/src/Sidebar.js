import React from 'react'
import './Sidebar.css'
import { MdDonutLarge } from 'react-icons/md';
import { BsFillChatLeftTextFill } from 'react-icons/bs';
import { FiMoreVertical } from 'react-icons/fi';
import { CgProfile } from 'react-icons/cg';
import { AiOutlineSearch } from 'react-icons/ai';
import SidebarChat from './SidebarChat';

function Sidebar() {
  return (
    <div className='sidebar'>
        <div className='sidebar__header'>
            <CgProfile />
            <div className='sidebar__headerRight'>
              <MdDonutLarge />
              <BsFillChatLeftTextFill />
              <FiMoreVertical />
            </div>
        </div>

        <div className='sidebar__search'>
          <div className='sidebar__searchContainer'>
            <AiOutlineSearch />
            <input placeholder='Search or start new chat' type='text' />
          </div>
        </div>

        <div className='sidebar__chats'>
          <SidebarChat />
          <SidebarChat />
          <SidebarChat />
        </div>
    </div>
  )
}

export default Sidebar