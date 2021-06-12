const mongoose = require('mongoose');

const subjectsSchema = new mongoose.Schema({
    name:{type:String,required:true},
    description:{type:String},
    amount:{type:Number},
    courses:[{type:mongoose.Schema.Types.ObjectId ,ref:'courses',required:false}]
});


const subjectModel = mongoose.model('subjects',subjectsSchema);

module.exports =subjectModel;