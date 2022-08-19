import { useState } from 'react'
import Message from '../Message'
import dayjs from '../../helpers/daysjs-with-plugin'
import {listMessages} from '../../data'

interface Props {
  listMessages: [typeof Message]
}


const ListMessage = () => {

  var tempMessages = listMessages
  const [messages, setMessages] = useState(tempMessages)


  const renderMessages = () => {
    let i = 0
    let messageCount = messages.length
    let tempMessagesDisplay = []

    while (i < messageCount) {
      let previous = messages[i - 1]
      let current = messages[i]
      let next = messages[i + 1]
      let isMine = current.author === 'me'
      let currentMoment = dayjs(current.timestamp)
      let prevBySameAuthor = false
      let nextBySameAuthor = false
      let startsSequence = true
      let endsSequence = true
      let showTimestamp = true

      if (previous) {
        let previousMoment = dayjs(previous.timestamp)
        let previousDuration = dayjs.duration(
          currentMoment.diff(previousMoment)
        )
        prevBySameAuthor = previous.author === current.author

        if (prevBySameAuthor && previousDuration.as('hours') < 1) {
          startsSequence = false
        }

        if (previousDuration.as('hours') < 1) {
          showTimestamp = false
        }
      }

      if (next) {
        let nextMoment = dayjs(next.timestamp)
        let nextDuration = dayjs.duration(nextMoment.diff(currentMoment))
        nextBySameAuthor = next.author === current.author

        if (nextBySameAuthor && nextDuration.as('hours') < 1) {
          endsSequence = false
        }
      }

      tempMessagesDisplay.push(
        <Message
          key={i}
          isMine={isMine}
          startsSequence={startsSequence}
          endsSequence={endsSequence}
          showTimestamp={showTimestamp}
          id={current.id}
          author={current.author}
          authorName={current.author}
          authorPhoto={current.photo}
          message={current.message}
          timestamp={current.timestamp}
        />
      )

      // Proceed to the next message.
      i += 1
    }

    return tempMessagesDisplay
  }

  return (
    <div className='relative overflow-scroll'>

      <div className='p-2 pb-2'>
        {renderMessages()}
      </div>

    </div>
  )
}


export default ListMessage