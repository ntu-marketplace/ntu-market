// import modules
const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const cors = require('cors');
const multer = require('multer')
const bodyParser = require('body-parser');
const { s3Uploadv3 } = require('./s3Service');
const socket = require("socket.io");
require('dotenv').config();
const { Configuration, OpenAIApi } = require("openai");

// openai config
const configuration = new Configuration({
    apiKey: process.env.OPEN_AI_API,
});
const openai = new OpenAIApi(configuration);

// routes
const messageRoutes = require("./routes/messages");

// controllers
const getData = require('./controllers/getUsers');
const getAds = require('./controllers/getAds');
const getItems = require('./controllers/getItems');
const getCategories = require('./controllers/getCategories');
const createUser = require('./controllers/createUser');
const findUser = require('./controllers/findUser');
const postItem = require('./controllers/postItem');
const getAlerts = require('./controllers/getAlerts');
const deleteItem = require('./controllers/deleteItem');
const patchItem = require('./controllers/patchItem');
const getContact = require('./controllers/getContact');
const chatbot = require('./controllers/chatbot');
const getPoints = require('./controllers/getPoints');
const patchPoints = require('./controllers/patchPoints');

// app 
const app = express();
const storage = multer.memoryStorage();

// db 
mongoose
.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log('db connected'))
.catch((err) => console.log("DB CONNECTION ERROR", err));

// middleware
app.use(morgan('dev'));
app.use(cors({ origin: true, credentials:true }))
app.use(bodyParser.json())

// image upload
const fileFilter = (req, file, cb) => {
    if (file.mimetype.split("/")[0] === 'image') {
        cb(null, true);
    } else {
        cb(new multer.MulterError("LIMIT_UNEXPECTED_FILE"), false)
    }
}

const upload = multer({
    storage,
    fileFilter,
    limits: {
        fileSize: 5000000
    }
});

app.post("/upload", upload.single("file"), async (req, res) => {
    try {
        console.log(req.body)
        const result = await s3Uploadv3(req.file)
        return res.json(result);
    } catch (err) {
        console.log(err);
    }
})

app.use((error, req, res, next) => {
    if (error instanceof multer.MulterError) {
        switch (error.code) {
            case "LIMIT_FILE_SIZE":
                return res.status(400).json({
                    message: 'File is too large'
                });
            
            case "LIMIT_FIELD_COUNT":
                return res.status(400).json({
                    message: 'File limit reached'
                })

            case "LIMIT_UNEXPECTED_FILE":
                return res.status(400).json({
                    message: "File must be an image"
                })
            
            default:
                break;
        }
    }
});

// routes
app.get("/", getData.handleGetUsers);
app.get("/get-ads", getAds.handleGetAds);
app.get("/get-items", getItems.handleGetItems);
app.get("/get-alerts", getAlerts.handleGetAlerts);
app.get("/get-categories", getCategories.handleGetCategories);
app.post("/create-user", createUser.handleCreateUser);
app.post("/verify-user", createUser.verifyEmail);
app.post("/find-user", findUser.handleFindUser);
app.post("/post-item", postItem.handlePostItem);
app.post("/contact", getContact.handleGetContacts);
app.post("/contact", getContact.handleGetContacts);
app.post("/update-contact", getContact.handleUpdateContacts);
app.delete("/delete-item/:id", deleteItem.handleDelItems);
app.patch("/patch-item/:id", patchItem.handlePatchItem);
app.use("/api/messages", messageRoutes);
app.post('/chatbot', chatbot.handleBotPrompt(openai));
app.patch('/patch-points', patchPoints.handlePatchPoints);
app.get('/get-points', getPoints.handleGetPoints);

// port
const port = process.env.PORT || 8080;

// listener
const server = app.listen(port, () => 
    console.log('server is running on port '+ port)
);

const io = socket(server, {
    cors: {
      origin: "*",
      credentials: true,
    },
});

global.onlineUsers = new Map();
io.on("connection", (socket) => {
  global.chatSocket = socket;
  socket.on("add-user", (userId) => {
    onlineUsers.set(userId, socket.id);
  });

  socket.on("send-msg", (data) => {
    const sendUserSocket = onlineUsers.get(data.to);
    if (sendUserSocket) {
      socket.to(sendUserSocket).emit("msg-recieve", data.msg);
    }
  });
});