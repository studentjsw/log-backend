const mongoose = require("mongoose");
const dotenv = require('dotenv');
dotenv.config().parsed;

const DB = process.env.DATABASE
mongoose.set('strictQuery', false);

mongoose.connect(DB,{
    useUnifiedTopology: true,
    useNewUrlParser: true
}).then(()=> console.log("DataBase Connected")).catch((errr)=>{
    console.log(errr);
})