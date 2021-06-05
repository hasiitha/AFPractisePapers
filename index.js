const mongoose = require('mongoose');
const express = require('express');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const cors = require('cors');
dotenv.config();

//setting mongo db connections
MONGODB_URI = process.env.MONGODB_URI;
mongoose.connect(MONGODB_URI,{
    useCreateIndex:true,
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useFindAndModify:false}
);
const connection = mongoose.connection;
connection.once("open",()=>{
    console.log("Connected to Mongo DB");
})


//setting app connections with the port
const app = express();
app.use(bodyParser.json());
app.use(cors());
const PORT = process.env.PORT || 5000;




//Routes
const SubjectsRoutes = require('./Routes/SubjectRoutes');
app.use('/Subjects',SubjectsRoutes);



//Making app to listen on Port
app.listen(PORT,()=>{
    console.log("The App is listening to the Port Number "+ PORT)
});








