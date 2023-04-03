// import modules
const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const cors = require('cors');
const multer = require('multer')
const bodyParser = require('body-parser');
const { s3Uploadv3 } = require('./s3Service');
require('dotenv').config();

// controllers
const getData = require('./controllers/getUsers');
const getItems = require('./controllers/getItems');
const getCategories = require('./controllers/getCategories');
const createUser = require('./controllers/createUser');
const findUser = require('./controllers/findUser');
const postItem = require('./controllers/postItem');
const getAlerts = require('./controllers/getAlerts');

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
app.get("/get-items", getItems.handleGetItems);
app.get("/get-alerts", getAlerts.handleGetAlerts);
app.get("/get-categories", getCategories.handleGetCategories);
app.post("/create-user", createUser.handleCreateUser);
app.post("/find-user", findUser.handleFindUser);
app.post("/post-item", postItem.handlePostItem);


// port
const port = process.env.PORT || 8080;

// listener
const server = app.listen(port, () => 
    console.log('server is running on port '+ port)
);