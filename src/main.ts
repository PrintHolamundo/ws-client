import { connectToserver } from './socket-client'
import './style.css'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
  <h1>WebSocket Client</h1>
  <span id="server-status">offline</span>
  </div>
`

connectToserver()