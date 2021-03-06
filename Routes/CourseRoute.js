const Router = require('express').Router();
const Course = require('../API/CourseAPI');

Router.post('/createCourse',async(req,res)=>{

    const bodyObj = req.body;
    const result = await Course.addCourse(bodyObj);
    res.send(result);
})

Router.get('/getAllCourses',async(req,res)=>{
    const resObj = await Course.getAllCourses();
    res.send(resObj);
})

Router.get('/getCourseSubs/:id',async(req,res)=>{
    const id = req.params.id;
    const resSubs = await Course.getSubjectsInCourse(id);
    res.send(resSubs);
})

Router.get('/calculateTotal/:id',async (req,res)=>{
  const subs = await Course.totalAmount(req.params.id);
  res.send(`${subs}`);
})
module.exports = Router;