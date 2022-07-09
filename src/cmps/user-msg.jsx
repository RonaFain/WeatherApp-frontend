import { useEffect, useState } from 'react'
import { eventBusService } from '../services/event-bus.service.js'

export function UserMsg() {
  const [msg, setMsg] = useState(null)

  useEffect(() => {
    const removeEvent = eventBusService.on('show-user-msg', (msg) => {
      setMsg(msg)
      setTimeout(()=>{
        setMsg(null)
      }, 2500)
    })

    return () => {
      removeEvent()
    }
  },[])

  const msgClass = msg ? msg.type : ''

  if (!msg) return <span></span>

  return(
      <section className={'user-msg ' + msgClass}>
        <button onClick={() => setMsg(null)}>x</button>
        <span>{msg.txt}</span>
      </section>
  )
}
