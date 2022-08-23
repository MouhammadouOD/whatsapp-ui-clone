import dayjs from 'dayjs'
import { BsCheck2All } from 'react-icons/bs'

interface Props {
  name : string
  photo: string
  lastMessage: string
  seen: boolean
  from : string
  timestamp : Date
}

const ConversationListItem = ({ name, photo, lastMessage, seen, from, timestamp } : Props) => {

  if(lastMessage.length > 50){
    lastMessage= `${lastMessage.substring(0,50)}...`
  }
  let timestampStr = dayjs(timestamp).format('L')
  const currentMoment = dayjs(new Date())
  const date = new Date(2022, 9, 22, 15, 0, 0)
  console.log(date)

  if(dayjs.duration(currentMoment.diff(timestampStr)).as('hours') < 24)
  timestampStr = dayjs(timestamp).format('hh:mm')

  return (
    <div className='flex flex-row p-2 hover:bg-gray-100 border-b justify-between'>
      <img className='w-14 h-12 rounded-full object-cover mr-2'
        src={photo}
        alt="profile"
      />
      <div className='w-full'>
        <h1 className='text-md text-black capitalize'>{name}</h1>
        <div className='flex space-x-1'>
        {from === 'me' && <BsCheck2All className={`${ seen ? 'text-blue-500' : 'text-gray-800'} `} />}
          <p className='text-xs text-gray-800 w-[23em] h-8'>
            {lastMessage}
          </p>
        </div>
      </div>
      <p className='text-xs text-gray-800' >{timestampStr}</p>
    </div>
  )
}

export default ConversationListItem