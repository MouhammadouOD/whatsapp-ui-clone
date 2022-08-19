import React, { ReactElement } from 'react'
import ConversationListItem from '../ConversationListItem'
import SearchBar from '../SearchBar'
import Toolbar from '../ToolBar'
import { BsPlusLg, BsThreeDots } from 'react-icons/bs'
import {conversations} from '../../data'

interface Props {
  allConversations: []
}

const ConversationList = () => {

  const iconButtons : ReactElement[] = [
    <BsPlusLg/>,
    <BsThreeDots/>
  ]

  const allConversations =  conversations

  return (
    <div className='relative flex flex-col scroll-smooth'>
      <div className='h-28 flex-col border-b w-full'>
        <div className=''>
          <Toolbar iconButtons={iconButtons} />
        </div>

        <div className=''>
          <SearchBar />
        </div>
      </div>

      <div className='overflow-scroll flex-auto border h-screen'>
      {allConversations.map(conversation => (
      <ConversationListItem
      name={conversation.name} 
      photo={conversation.photo} 
      lastMessage={conversation.lastMessage} 
      seen={conversation.seen}
      timestamp={conversation.timestamp}
      />) )}
      </div>


    </div>
  )
}

export default ConversationList