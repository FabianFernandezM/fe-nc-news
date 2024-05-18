
import io from "socket.io-client"
import {useEffect, useState} from "react"

const socket = io.connect("https://peaceful-waters-01379-cd0c2d10d8f8.herokuapp.com/")

export default function Chat() {
  const [room, setRoom] = useState("1")
  const [message, setMessage] = useState("")
  const [messageReceived, setMessageReceived] = useState("")

  const joinRoom = () => {
    if (room!== "") socket.emit("join_room", room)
  }

  const sendMessage = ()=> {
    socket.emit("send_message", {message , room})
  }

  useEffect(()=>{
    socket.on("receive_message", (data)=>{
      setMessageReceived(data.message)
    })
  }, [socket])

  joinRoom()

  return (
    <div className="App">
      <input placeholder='Room...' onChange={(e) => {setRoom(e.target.value)}}></input>
      <button onClick={joinRoom}>Join Room</button>
      <input placeholder='Message...' onChange={(e) => {setMessage(e.target.value)}}></input>
      <button onClick={sendMessage}>Send message</button>
      <p>{messageReceived}</p>
    </div>
  );
}