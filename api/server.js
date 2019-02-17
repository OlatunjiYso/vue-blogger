import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import 'dotenv/config';
import expressValidator from 'express-validator';

import dbConfig from './DB';
import mongoose from 'mongoose';
import {postRoute} from './routes/post_route';

mongoose.Promise = global.Promise;
mongoose.connect(dbConfig.DB, {useNewUrlParser: true}).then(
  () => {console.log('Database is connected')},
  err => { console.log('Can not connect to the database' + err)}
);


const app = express();
const PORT = process.env.PORT || 4000;
app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

//Use express validator
app.use(expressValidator());

app.use('/posts', postRoute);

app.listen(PORT, ()=>{
  console.log('Backend server running on port:', PORT)
});

