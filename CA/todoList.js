const express = require("express");
const http = require("http");
const { Server } = require("socket.io");

const app = express();
app.use(express.static("public"));   
const server = http.createServer(app);
const io = new Server(server, { cors: { origin: "*" } });

let todos = [];

io.on("connection", (socket) => {
  console.log("user connected:", socket.id);

  socket.emit("loadTodos", todos);

  socket.on("addTodo", (task) => {
    todos.push(task);
    io.emit("loadTodos", todos);
  });

  socket.on("deleteTodo", (index) => {
    todos.splice(index, 1);
    io.emit("loadTodos", todos);
  });
});

server.listen(3000, () => console.log("server running at 3000"));
