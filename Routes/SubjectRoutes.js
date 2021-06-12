const Router = require('express').Router();
const Subject =require('../API/SubjectsAPI');

Router.post('/InsertSubject',async(req,res)=>{
    const obj = req.body;
    const result = await Subject.insertSubject(obj);
    res.send(result);
});

Router.get('/getAllSubjects',async(req,res)=>{
    const subs = await Subject.getAllSubjects();
    res.send(subs);
})

Router.get('/getSubject/:id',async(req,res)=>{
    const id = req.params.id;
    const subject = await Subject.getSubject(id);
    res.send(subject);
})
module.exports = Router;



