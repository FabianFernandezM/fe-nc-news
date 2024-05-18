import express from 'express'
const app = express()

import { createServer } from "http"
import { Server } from "socket.io"

import cors from "cors"
app.use(cors())

const server = createServer(app)
const io = new Server(server)

io.on("connection", (socket) => {
    console.log(`user connected: ${socket.id}`)

    socket.on("join_room", (data)=> {
        socket.join(data)
    })

    socket.on("send_message", (data) => {
        socket.to(data.room).emit("receive_message", data)
    })
})

server.listen(process.env.PORT || 3000, ()=> {
    console.log("server is running")
})



