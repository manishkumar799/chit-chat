const express = require("express");
const mongoose = require("mongoose");
const config = require("./config/config.js");
const routes = require("./app/routes/routes.js");
const cors = require("cors");
const morgan = require("morgan");
const helmet = require("helmet");
const fs = require("fs");
const path = require("path");
const { Server } = require("socket.io");

const { createServer } = require("node:http");
const { join } = require("node:path");

const app = express();
const server = createServer(app);

const io = new Server(server);

// io.on("connection", (socket) => {
//   socket.on("chat message", (msg) => {
//     io.emit("chat message", msg);
//     console.log(msg);
//   });
// });
let msg = "";

io.on("connection", (socket) => {
  console.log("a user connected");
  // socket.join("John-Alice");

  socket.on("Join", () => {
    socket.join("John-Alice");
    // io.to("John-Alice").emit("John-Alice", roomName);
    // io.to("John-Alice").emit("John-Alice", roomName.msg);
  });

  socket.on("Alice", (msg) => {
    socket.to("John-Alice").emit("John", msg);
  });
  socket.on("John", (msg) => {
    socket.to("John-Alice").emit("Alice", msg);
  });

  // socket.on('John-Alice', message => {
  //     console.log('John:', message);

  //     io.to("John-Alice").emit('Alice', message);
  //     io.to("John-Alice").emit('John', message);
  // });
  // socket.on('Alice', message => {
  //     console.log('Alice:', message);
  //     io.to("John-Alice").emit('John', message);
  // });

  socket.on("disconnect", () => {
    console.log("user disconnected");
  });
});

app.use((req, res, next) => {
  req.io = io;
  next();
});

app.use(
  cors({
    origin: ["http://localhost:5173", "http://localhost:3000", "*"],
    methods: "GET,POST,PUT,DELETE",
    credentials: true,
  })
);
const accessLogStream = fs.createWriteStream(
  path.join(__dirname, "access.log"),
  { flags: "a" }
);
app.use(morgan("combined", { stream: accessLogStream }));
// app.use(
//   helmet({
//     crossOriginResourcePolicy: false,
//   })
// );

app.set(express.urlencoded({ extended: false }));
app.set(express.json());

async function connectToDatabase() {
  try {
    await mongoose.connect(
      `mongodb://${config.database.host}:${config.database.port}/${config.database.name}`
    );
    console.log("Mongoose connected to database");
  } catch (error) {
    console.error("Mongoose connection error: " + error);
    process.exit(1); // Exit process if failed to connect to database
  }
}
connectToDatabase();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api", routes);
// app.get("/", async function (req, res) {
//   res.send("Hello, world!");
// });

// app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

mongoose.connection.on("connected", () => {
  // console.log("Mongoose connected to " + uri);

  const PORT = process.env.PORT || 3000;
  server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
});
mongoose.connection.on("error", (err) => {
  console.error("Mongoose connection error: " + err);
});
mongoose.connection.on("disconnected", () => {
  console.log("Mongoose disconnected");
});
mongoose.connection.on("close", () => {
  console.log("Mongoose connection closed");
});
