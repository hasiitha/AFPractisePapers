const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
    name:{type:String},
    code:{type:String},
    passmark:{type:String},
    lecturerInCharge:{type:String},
    subjects:[{type:mongoose.Schema.Types.ObjectId,required:false, ref:'subjects'}]
})

const model = mongoose.model('courses',courseSchema);

module.exports = model;

