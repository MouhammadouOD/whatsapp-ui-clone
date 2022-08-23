import { BsCheck2All } from 'react-icons/bs'
import dayjs from '../../helpers/daysjs-with-plugin'

interface Props {
  id: number
  isMine: boolean
  startsSequence: boolean
  endsSequence: boolean
  showTimestamp: boolean
  author: string
  authorName: string
  authorPhoto: string
  message: string
  timestamp: Date
}


const Message = ({
  isMine,
  startsSequence,
  endsSequence,
  showTimestamp,
  message,
  timestamp
}: Props) => {
  const friendlyTimestamp = dayjs(timestamp).format('LLLL')
  return (
    <div className='flex flex-col'>

      {showTimestamp && (
        <div className={`flex justify-center font-semibold 
        text-xs uppercase text-black mx-2.5 my-0`}>
          {friendlyTimestamp}
        </div>
      )}

      <div className='flex flex-col'>

        <div
          className={
            `text-sm flex 
            ${isMine ? 'justify-end' : 'flex-row-reverse place-content-start'}`
          }
        >
          <div
            className={
              `mx-px my-px px-2.5 py-4 text-black rounded-2xl max-w-[70%]
              ${isMine
                ? 'bg-green-100 rounded-tl-2xl rounded-bl-2xl rounded-tr-2xl rounded-br-sm'
                : 'bg-white  rounded-tl-2xl rounded-bl-sm rounded-tr-2xl rounded-br-2xl'
              }
              ${startsSequence ? 'mt-2' : ''}`
            }
            title={friendlyTimestamp}
          >
            {message}
            
          </div>

        </div>
        {endsSequence ? (
          <div
            className={
              `py-2 text-xs text-black 
              ${endsSequence ? 'visible' : 'invisible'}`
            }
          >
            {' '}
            <div
              className={
                `text-xs text-black capitalize 
                ${isMine ? 'text-right mr-2' : 'text-left ml-2'}`
              }
            >
              {dayjs(timestamp).format('LLL')}
            </div>{' '}
          </div>
        ) : (
          ''
        )}
      </div>

    </div>
  )
}

export default Message