import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import 'dotenv/config';
import dbConfig from './DB';
import mongoose from 'mongoose';

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

app.listen(PORT, ()=>{
  console.log('Backend server running on port:', PORT)
});
