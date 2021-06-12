const courses = require('../Models/CoursesModel');
const subject = require('../Models/SubjectsModel');

async function addCourse(courseObj){
    try {
        const newCourse = new courses(courseObj);
        const result = await newCourse.save();
        result.subjects.forEach(element=>{
            subject.findByIdAndUpdate(element,{
                $push:{courses:result._id}
            }).then((data=>console.log('Success'))).catch(err=>{console.log(err.message)})})
        return result;
    }catch (e) {
        console.error(e.message);
    }

}

async function getAllCourses(){
    try {
        const resCourses = await courses.find().populate('subjects', 'name ');
        return resCourses;
    }catch (e) {
        console.error(e.message);
    }
}

async function getSubjectsInCourse(id){
    try{
        const getSubjects = await courses.findById({_id:id}).select({subjects:1})
        return getSubjects;
    }catch (e) {
        console.error(e.message)
    }
}

async function totalAmount(id){
    try{
        const course = await courses.findById({_id:id}).populate('subjects','amount -_id').select({subjects:1})
        const subs = course.subjects;

        if(subs){
            let amount =0;
            subs.map(a =>{
                amount = amount + parseFloat(a.amount);
            })
            return amount;
        }else{
            return 0;
        }
    }catch (e) {
        console.log(e.message)
    }

}

module.exports={addCourse,getAllCourses,getSubjectsInCourse,totalAmount}
