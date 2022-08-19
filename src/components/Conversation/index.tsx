import { ReactElement } from 'react'
import Compose from '../Compose'
import ListMessage from '../ListMessage'
import Toolbar from '../ToolBar'
import { BsCameraVideo, BsThreeDots } from 'react-icons/bs'
import { IoCallOutline } from 'react-icons/io5'
import { VscSearch } from 'react-icons/vsc'
import { TbMinusVertical } from 'react-icons/tb'

const Conversation = () => {

  const iconButtons : ReactElement[] = [
    <BsCameraVideo/>,
    <IoCallOutline/>,
    <TbMinusVertical/>,
    <VscSearch/>,
    <BsThreeDots/>
  ]

  return (
    <div className='flex flex-col align-items-stretch gap-0 relative border bg-gray-300'>
      <div className='flex-none border w-full'>
        <Toolbar iconButtons={iconButtons}/>
      </div>
      <div className='overflow-scroll h-screen border w-full py-1'>
        <ListMessage />
      </div>
      <div className='h-14 flex-none fixed bottom-0 border w-full my-1'>
        <Compose />
      </div>

    </div>
  )
}

export default Conversation