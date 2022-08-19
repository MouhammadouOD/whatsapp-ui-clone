import React from 'react'
import Conversation from '../Conversation'
import ConversationList from '../ConversationList'

const MainLayout = () => {
    return (
        <div className='relative max-h-screen grid grid-col-4'>
            
            <div className='col-end-1 border-r w-[30em] '>
                <ConversationList />
            </div>
            <div className='col-start-1 col-end-4 w-[60em]'>
                <Conversation />
            </div>

        </div>
    )
}

export default MainLayout