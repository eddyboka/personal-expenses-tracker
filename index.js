import express from 'express'
import trackerRouter from './routes/trackerRoute.js';

const app = express();

const port = process.env.PORT || 3005 ; 

app.use(express.json());

app.use(trackerRouter);

app.listen(port,()=>{
    console.log(`Server is listening on Port: ${port}.`)
})

