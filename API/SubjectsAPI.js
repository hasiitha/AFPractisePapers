const SubjectModel = require('../Models/SubjectsModel');


async function insertSubject(objectIn){
 try {
     const newObj = new SubjectModel(objectIn);
     const result = newObj.save();
     return result;
 }catch (e) {
     console.error(e.message);
 }
}

async function getAllSubjects(){
    try{
        const resultSet = await  SubjectModel.find().select({name:1,description:1})
        return resultSet;
    }catch (e) {
        console.error(e.message)
    }
}

async function getSubject(id){
    try{
        const resSub = await SubjectModel.findById({_id:id}).populate('courses','name');
        console.log(resSub);
        return resSub;
    }catch (e) {

    }
}

module.exports = {insertSubject,getAllSubjects,getSubject}