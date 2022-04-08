import React, { useState,useEffect } from 'react'
import './Chat.css'
import { CgProfile } from 'react-icons/cg';
import {AiOutlineSearch} from 'react-icons/ai';
import {IoMdAttach} from 'react-icons/io';
import {FiMoreVertical} from 'react-icons/fi';
import {BiSmile} from 'react-icons/bi';
import {BsFillMicFill} from 'react-icons/bs';
import axios from './axios';

function Chat({messages}) {

  const [input,setInput]=useState('');

  const sendMessage=async(e)=>{
    e.preventDefault();

    await axios.post('/messages/new',{
      "message": input,
      "name": "Ali",
      "timestamp": "Im a demo timestamp",
      "received": false
    });

    setInput('');
  }

  return (
    <div className='chat'>
        <div className='chat__header'>
          <CgProfile />

          <div className='chat__headerInfo'>
            <h3>Room name</h3>
            <p>Last seen at...</p>
          </div>

          <div className='chat__headerRight'>
            <AiOutlineSearch />
            <IoMdAttach />
            <FiMoreVertical />
          </div>
        </div>

          <div className='chat__body'>
            {messages.map((message)=>(
              <p className={`chat__message ${message.received && 'chat__receiver'}`}>
              <span className='chat__name'>
                {message.name}
              </span>
                {message.message}
              <span className='chat__timestamp'>
                {message.timestamp}
              </span>
            </p>
            ))}
        </div>

        <div className='chat__footer'>
          <BiSmile />
          <form>
            <input value={input} onChange={e=>setInput(e.target.value)} placeholder='Type a message' type='text'/>
            <button onClick={sendMessage} type='submit'>Send a message</button>
          </form>
          <BsFillMicFill />
        </div>

    </div>
  )
}

export default Chat