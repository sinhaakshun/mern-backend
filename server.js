const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes/routes');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors());

mongoose.connect('mongodb://localhost:27017/')
.then(()=>{
    console.log('connection established');
}).catch(err => {
    console.log('failed to connect')
})


app.use('/api', routes)

app.listen(4000, ()=>{
    console.log('listening on port 4000')
})