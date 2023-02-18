import dotenv from 'dotenv';
import mongoose from 'mongoose';

dotenv.config();

const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;


const Connection = () =>{

    const MONGODB_URL = `mongodb+srv://${USERNAME}:${PASSWORD}@todoapp.ivkblnk.mongodb.net/?retryWrites=true&w=majority`;

    mongoose.set('strictQuery', true);

    mongoose.connect(MONGODB_URL);
   

    mongoose.connection.on('connected', () =>{
        console.log('Database Connected Successfully');
    })

    mongoose.connection.on('disconnected', () =>{
        console.log('Database disonnected');
    })

    mongoose.connection.on('error', () =>{
        console.log('Error while connecting with the database');
    })
}



export default Connection;