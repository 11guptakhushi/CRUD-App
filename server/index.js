import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import Routes from './route.js';

const app = express(); 

app.use(bodyParser.json({extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.use('/users', Routes);

const URL = 'mongodb+srv://user:mern_crud@crud.tyc4x.mongodb.net/CRUD?retryWrites=true&w=majority&ssl=true';
const PORT = 8000;

mongoose.connect(URL, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true })
        .then(() => { 
            app.listen(PORT, () => console.log(`Server is running on PORT: ${PORT}`))
        })
        .catch((error) => {
            console.log('Error:', error.message)
        })


