import express from 'express';
import * as dotenv from 'dotenv';
import  cors from 'cors';

import connectDB from './mongodb/connect.js';
import postRoutes from './routes/postRoutes.js'
import dalleRoutes from './routes/dalleRoutes.js'

dotenv.config();//allow us to pool our environment variable from dotenv file 

const app = express(); //initialise our express application
app.use(cors());
app.use(express.json({limit:'50mb'}));


//creating API endpoints that we can connect to the front end
app.use('/api/v1/post',postRoutes);
app.use('/api/v1/dalle',dalleRoutes);

app.get('/',async(req,res) => {
    res.send('Hello from DALL-E!');
})

const startServer = async () => {

    try {
        connectDB(process.env.MONGODB_URL);
        app.listen(8080, () => console.log('Server has started on port http://localhost:8080'))
    } catch (error) {
        console.log(error);
    }

    
}

startServer();