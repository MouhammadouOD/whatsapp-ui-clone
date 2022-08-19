import React from 'react'
import { MdOutlineEmojiEmotions, MdOutlineAttachFile } from 'react-icons/md'
import { GrMicrophone } from 'react-icons/gr'
import { BiSend } from 'react-icons/bi'

const Compose = () => {
  return (
    <div className='px-2 py-3 bg-gray-100 space-x-3 flex relative'>
      <button className='hover:bg-white rounded-full p-1'>
        <MdOutlineEmojiEmotions />
      </button>
      <button className='hover:bg-white rounded-full p-1'>
        <MdOutlineAttachFile />
      </button>
      <div>
        <input type="text" name="compose" id="" placeholder='type a message' className='px-3 w-[48em] h-8 rounded-2xl' />
      </div>
      <button className='hover:bg-white rounded-full p-1'>
        <BiSend />
      </button>
      <button className='hover:bg-white rounded-full p-1'>
        <GrMicrophone />
      </button>
    </div>
  )
}

export default Compose