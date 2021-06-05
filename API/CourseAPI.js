const courses = require('../Models/CoursesModel');


async function addCourse(courseObj){
    try {
        const newCourse = new courses(courseObj);
        const result = await newCourse.save();
        return result;
    }catch (e) {
        console.error(e.message);
    }
}

async function getAllCourses(){
    try {
        const resCourses = await courses.find().populate('subjects', 'name ').populate('subjects', 'description').populate('subjects', 'amount');
        return resCourses;
    }catch (e) {
        console.error(e.message);
    }
}

async function getSubjectsInCourse(id){
    try{
        const getSubjects = await courses.findById({id:id}).select({subjects:1})
        return getSubjects;
    }catch (e) {
        console.error(e.message)
    }
}
module.exports={addCourse,getAllCourses,getSubjectsInCourse}
