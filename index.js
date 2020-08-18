const express=require('express');
const app=express();
const mongoose = require('mongoose');
const bodyParser =  require('body-parser');
require('dotenv/config');

app.use(bodyParser.json());

//import routes
const postRoute = require('./routes/post');

app.use('/posts', postRoute);

//ROUTES
app.get('/', (req, res)=>{
    res.send('We are on home')
});




//connect to DB
mongoose.connect(process.env.DB_CONECTION, { useUnifiedTopology: true },
 ()=>console.log('connected to DB!'))


//how do we start listening to the server
app.listen(4000,()=>{
    console.log("listenig on PORT", 4000)
})


