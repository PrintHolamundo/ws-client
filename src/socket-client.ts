import { Manager } from "socket.io-client"

export const connectToserver = () => {
    const manager = new Manager('http://localhost:3000/socket.io/socket.io.js')
    //  http://localhost:3000/socket.io/socket.io.js

    const socket = manager.socket('/')
}