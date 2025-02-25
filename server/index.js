const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const routes = require('./routes');

const documentsController = require('./controllers/documentsController');

const DB_CONNECTION_STRING = 'mongodb://localhost:27017/documents';
const PORT = 5000;

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors());
app.use(routes);

mongoose.connect(DB_CONNECTION_STRING)
.then(() => {
    console.log('Connected to DB');

    app.listen(PORT, () => {
        console.log(`Server is running on PORT ${PORT}`);
    })
})
.catch(error => console.error('Error connecting to DB', error));

